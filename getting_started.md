---
outline: deep
---

# Getting started

This page demonstrates the **installation** process of the [nutrix restaurant management system](/), to get more details about the nutrix system architecture, kindly check the following [architecture](/architecture) page

## Install using docker-compose

This section demonstrates how to install the nutrix service using [docker-compose](https://docs.docker.com/compose/).

### 1. Clone the devops repo
```sh
git clone https://github.com/nutrixpos/devops.git
```

### 2. Change directory to the devops repo dir and then run docker-compose up
```sh
cd devops
docker-compose up --build -d
```

### 3. Configure zitadel domain name resolution.
Add zitadel domain to hosts file so that zitadel domain name refers to 127.0.0.1 (localhost) by your local DNS. 
- On **Windows** open `C:\Windows\System32\drivers\etc\hosts` and add the following entry : `127.0.0.1 zitadel`

### 4. Configure frontend auth in zitadel
Open zitadel service url, by default configured at [zitadel:8080](http://zitadel:8080) and login using the following credentials:

- **username**: `zitadel-admin@zitadel.zitadel`
- **password**: `Password1!`

Create a "User agent" project on zitadel and set the **Redirect Settings** as follows:
- Redirect URIs: `http://localhost:3000/auth/signinwin/zitadel`

which refers to the frontend URI
- Post Logout URIs: `http://zitadel:8080/`
::: tip
    ensure the trailing '/'
:::

Now save the `Client ID` found in the Configuration tab in the zitadel "User agent" project and the `Project ID` found in the URI after the /project/ section


Open .env inside the devops dir and set the following environment variables:

``` .env
VUE_APP_ZITADEL_PROJECT_RESOURCE_ID=<Client ID from the last step>
VUE_APP_ZITADEL_CLIENT_ID=<Project ID from last step>
```

### 5. Configure pos api (backend) auth against zitadel
Open zitadel console and create a new "API" project, in the configuration section, add a new key and download it to `devops/pos_mnt/zitadel-key.json`

### 6. Configure autostarting

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
WorkingDirectory=/path/to/your/devops_repo
ExecStart=/usr/bin/docker-compose up -d
ExecStop=/usr/bin/docker-compose down
Restart=no

[Install]
WantedBy=multi-user.target
```
::: tip
Make sure you change **/path/to/your/devops_repo** in the above file to the devops repo path on your machine
:::

Enable and start the service

```sh
sudo systemctl enable nutrix.service
sudo systemctl start nutrix.service
```

### 7. Open nutrix console
Open nutrix console at http://localhost:3000



