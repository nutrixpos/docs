---
outline: deep
---

# Authentication

NutrixPOS uses [OIDC](https://openid.net/developers/how-connect-works/) for authentication. you need to add an oidc provider so nutrixpos can authenticate against. In this guide we will walkthrough how to do that using [Zitadel](https://zitadel.com/).

Kindly refer to the [Zitadel](https://zitadel.com/) documentation for the installation process.

After installing Zitadel continue the next section:
## Post Zitadel installation steps
The following steps will guide you through the Zitadel installation process throught Zitadel console GUI.

### Create a new Zitadel project:

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel0.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel1.png)

### Ceate a new API app let's call it "backend":
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel2.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel3.png)

Choose the JWT authentication method
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel4.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel5.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel6.png)

#### Create a new Key for the API "backend" app
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel7.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel8.png)

#### Download and save the Key file
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel9.png)

#### Add the downloaded key file to /mnt/zitadel-key.json inside the root directory of the nutrixpos backend project.
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel10.png)

#### Edit the config.yaml file in the root directory of the backend binary and edit the zitadel section as following:
``` yaml
zitadel:
  domain: "zitadel"
  port: 8081
  # this is the path to your zitadel key 
  # related to your root directory of backend
  key_path: "./mnt/zitadel-key.json" 
  enabled: true
```


Now the backend app is ready to authenticate against Zitadel.
In the following steps we will be moving forward with configuring auth for the frontend.


### Create User agent app "frontend"
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel2.png)

Choose "User agent" app type let's call it "frontend"
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel11.png)

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel12.png)

Now in this page 
- Enable "Development Mode"
- Redirect URIs
    - Add http://localhost:8080/auth/signinwin/zitadel
        - the frontend should be running on :8080
- Post Logout URIs
    - Add http://zitadel:8081/
    ::: tip
        Make sure that zitadel resolve to 127.0.0.1
        On Windows you can add that in the hosts file
        On Linux /etc/hosts
    :::
    

![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel13.png)


#### Add related Zitadel app properties to the frontend/.env file
``` env
VITE_APP_BACKEND_HOST=localhost:8000
VITE_APP_MODULE_CORE_API_PREFIX=/core
VITE_APP_ZITADEL_PROJECT_RESOURCE_ID=323062603569954818
VITE_APP_ZITADEL_CLIENT_ID=323067089445257218
VITE_APP_ZITADEL_ISSUER=http://zitadel:8081/
VITE_APP_ZITADEL_ENABLED=true
```
VITE_APP_ZITADEL_PROJECT_RESOURCE_ID: Id of the zitadel project
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel15.png)

VITE_APP_ZITADEL_CLIENT_ID: Client Id from the frontend app
![Zitadel Post installation steps](https://elmawardy.sirv.com/nutrixpos-docs/zitadel16.png)

Now that you have the .env file upadated, you have to (unfortunately) rebuild the frontend app using the new .env file. 
You can find the frontend app at [Frontend](https://github.com/nutrixpos/pos/tree/main/frontend) repo dir

::: tip
It's recommended to build the frontend from the same git tag or commit hash of the deployment
:::

After that authentication/authorization is added to the app.

::: warning
You have to maintain the zitadel server. otherwise the app may stop working.
:::


