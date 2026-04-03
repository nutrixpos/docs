---
outline: deep
---
# Запуск с использованием docker-compose

В этом разделе показано, как установить услугу Nutrix с помощью [docker-compose](https://docs.docker.com/compose/).

::: tip
На Windows убедитесь, что [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) установлен перед началом.
:::

::: info
Убедитесь, что установлены [git](https://git-scm.com/), [docker](https://www.docker.com/) и [docker-compose](https://docs.docker.com/compose/)

:::

### 1. Клонируйте репо pos и запустите docker compose
```sh
git clone https://github.com/nutrixpos/pos.git
cd pos
docker-compose up --build -d
```


## Конфигурация аутентификации **(Опционально)**

### 2. Конфигурация разрешения имен доменов Zitadel.

Добавьте домен Zitadel в файл хостов, чтобы имя домена Zitadel относилось к 127.0.0.1 (localhost) вашим локальным DNS. 
- На **Windows** откройте `C:\Windows\System32\drivers\etc\hosts` и добавьте следующую запись: `127.0.0.1 zitadel`

### 3. Конфигурация фронтенд-аутентификации в Zitadel
Откройте URL-адрес службы Zitadel, по умолчанию настроенный на [zitadel:8080](http://zitadel:8080) и войдите, используя следующие учетные данные:

- **имя пользователя**: `zitadel-admin@zitadel.zitadel`
- **пароль**: `Password1!`

Создайте новый проект и назовите его "nutrix"

Создайте приложение "User agent" внутри проекта "nutrix" и установите **Параметры перенаправления** следующим образом:
- Redirect URIs: `http://localhost:3000/auth/signinwin/zitadel`

что относится к URI фронтенда
- Post Logout URIs: `http://zitadel:8080/`
::: tip
    убедитесь в завершающей косой черте '/'
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



