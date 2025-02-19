---
outline: deep
---

# Getting started

This page demonstrates the **installation** process of the [nutrix restaurant management system](/), to get more details about the nutrix system architecture, kindly check the following [architecture](/architecture) page

## Install using docker-compose

This section demonstrates how to install the nutrix service using [docker-compose](https://docs.docker.com/compose/).

#### Clone the devops repo
```sh
git clone https://github.com/nutrixpos/devops.git
```

#### Change directory to the devops repo dir and then run docker-compose up
```sh
cd devops
docker-compose up --build -d
```

#### Add zitadel host to hosts file so that zitadel domain name refers to 127.0.0.1 (localhost) by your local DNS. 
- On **Windows** open `C:\Windows\System32\drivers\etc\hosts` and add the following entry : `127.0.0.1 zitadel`

#### Open zitadel service url, by default configured at [zitadel:8080](http://zitadel:8080) and login using the following credentials:
- **username**: `zitadel-admin@zitadel.zitadel`
- **password**: `Password1!`

#### Create a "User agent" project on zitadel and set the **Redirect Settings** as follows:
- Redirect URIs: `http://localhost:3000/auth/signinwin/zitadel`

which refers to the frontend URI
- Post Logout URIs: `http://zitadel:8080/`
::: tip
    ensure the trailing '/'
:::

Now save the `Client ID` found in the Configuration tab in the zitadel "User agent" project and the `Project ID` found in the URI after the /project/ section


#### Open .env inside the devops dir and set the following environment variables:

``` .env
VUE_APP_ZITADEL_PROJECT_RESOURCE_ID=<Client ID from the last step>
VUE_APP_ZITADEL_CLIENT_ID=<Project ID from last step>
```

#### Open zitadel console and create a new "API" project, in the configuration section, add a new key and download it to `devops/pos_mnt/zitadel-key.json`

#### Run nutrix again
```sh
docker-compose up --build -d
```

#### Open nutrix console at http://localhost:3000



