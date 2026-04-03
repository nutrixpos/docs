---
outline: deep
---

# Аутентификация

NutrixPOS использует [OIDC](https://openid.net/developers/how-connect-works/) для аутентификации. Вам нужно добавить провайдера OIDC, чтобы NutrixPOS мог аутентифицироваться против него. В этом руководстве мы расскажем вам, как это сделать с помощью [Zitadel](https://zitadel.com/).

Пожалуйста, обратитесь к документации [Zitadel](https://zitadel.com/) для получения процесса установки.

После установки Zitadel и [установки NutrixPOS](/ru/userguide/installation.html) продолжите следующий раздел, чтобы добавить аутентификацию.
## Шаги после установки Zitadel
Следующие шаги направят вас через процесс установки Zitadel через GUI консоли Zitadel.

### Создайте новый проект Zitadel:

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel0.png)

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel1.png)

### Создайте новое приложение API, давайте назовем его "backend":
![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel2.png)

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel3.png)

Выберите метод аутентификации JWT
![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel4.png)

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel5.png)

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel6.png)

#### Создайте новый ключ для приложения API "backend"
![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel7.png)

![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel8.png)

#### Загрузите и сохраните файл ключа
![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel9.png)

#### Добавьте загруженный файл ключа в /mnt/zitadel-key.json внутри корневой папки проекта резервной копии Nutrixpos.
![Шаги после установки Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel10.png)

#### Отредактируйте файл config.yaml в корневом каталоге двоичного резервного кода и отредактируйте раздел Zitadel следующим образом:
``` yaml
zitadel:
  domain: "zitadel"
  port: 8081
  # это путь к вашему ключу Zitadel 
  # связано с вашей корневой папкой
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


