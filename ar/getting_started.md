---
outline: deep
---
# التشغيل باستخدام docker-compose

يوضح هذا القسم كيفية تثبيت خدمة Nutrix باستخدام [docker-compose](https://docs.docker.com/compose/).

::: tip
على Windows تأكد من تثبيت [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) قبل المتابعة.
:::

::: info
تأكد من تثبيت [git](https://git-scm.com/) و [docker](https://www.docker.com/) و [docker-compose](https://docs.docker.com/compose/)

:::

### 1. استنسخ مستودع pos وقم بتشغيل docker compose
```sh
git clone https://github.com/nutrixpos/pos.git
cd pos
docker-compose up --build -d
```


## تكوين المصادقة **(اختياري)**

### 2. قم بتكوين دقة اسم مجال Zitadel.

أضف مجال Zitadel إلى ملف المضيفين بحيث يشير اسم مجال Zitadel إلى 127.0.0.1 (localhost) بواسطة DNS المحلي الخاص بك. 
- على **Windows** افتح `C:\Windows\System32\drivers\etc\hosts` وأضف الإدخال التالي: `127.0.0.1 zitadel`

### 3. قم بتكوين مصادقة الواجهة الأمامية في Zitadel
افتح عنوان خدمة Zitadel ، وافتراضياً تم تكوينه في [zitadel:8080](http://zitadel:8080) وسجل الدخول باستخدام بيانات الاعتماد التالية:

- **اسم المستخدم**: `zitadel-admin@zitadel.zitadel`
- **كلمة المرور**: `Password1!`

إنشاء مشروع جديد وأطلق عليه اسم "nutrix"

إنشاء تطبيق "User agent" داخل مشروع "nutrix" وتعيين **إعدادات إعادة التوجيه** كما يلي:
- Redirect URIs: `http://localhost:3000/auth/signinwin/zitadel`

والذي يشير إلى عنوان الواجهة الأمامية
- Post Logout URIs: `http://zitadel:8080/`
::: tip
    تأكد من الشرطة المائلة الزائدة '/'
:::

Now save the `Client ID` found in the Configuration tab in the zitadel "User agent" app and the `Project ID` found in the URI after the /project/ section


change the following vars inside the `docker-compose.yaml` file

```
VITE_APP_ZITADEL_PROJECT_RESOURCE_ID=<Client ID from the last step>
VITe_APP_ZITADEL_CLIENT_ID=<Project ID from last step>
```

### 4. Configure pos api (backend) auth against zitadel
Open zitadel console and create a new "API" app inside the nutrix, in the configuration section, add a new key and download it to `pos/mnt/zitadel-key.json`

### 5. Configure autostarting

::: info
For **Windows** users !

Enable systemd in wsl config

```sh
vim /etc/wsl.conf
```
```/etc/wsl.conf
[boot]
systemd=true
```

You will then need to close the Linux distribution. You can use the command `wsl.exe --shutdown` in PowerShell to restart all WSL instances.

Once your Linux distribution restarts, systemd will be running. You can confirm using the command: systemctl list-unit-files --type=service, which will show the status of any services associated with your Linux distribution.

for more info refer to [WSL Systemd](https://learn.microsoft.com/en-us/windows/wsl/systemd)
:::

Create systemd unit files
```sh
sudo nano /etc/systemd/system/nutrix.service
```

``` nutrix.service{9}
[Unit]
Description=My Docker Compose Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/path/to/your/pos_repo
ExecStartPre=/usr/bin/docker-compose down
ExecStart=/usr/bin/docker-compose up -d
ExecStop=/usr/bin/docker-compose down
Restart=no

[Install]
WantedBy=multi-user.target
```
::: tip
Make sure you change **/path/to/your/pos_repo** in the above file to the pos repo path on your machine
:::

Enable and start the service

```sh
sudo systemctl enable nutrix.service
sudo systemctl start nutrix.service
```

### 7. Authorization
Open zitadel console at [http://zitadel:8080](https://zitadel:8080) and press on the project `nutrix` then press the `Roles` tab, then add three roles "admin", "cashier" & "chef"

Now go to the `Authorizations` tab at the top of the navbar, then click on `+ New` then choose the user `zitadel-admin@zitadel.zitadel` and then add "admin" role to it

### 8. Open nutrix console
Open nutrix console at http://localhost:3000



