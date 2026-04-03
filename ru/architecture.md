---
outline: deep
---

# Архитектура

Nutrix - это веб-приложение, состоящее из следующих трех основных подсистем:

#### pos (Серверная часть)
Основная система и серверная часть Nutrix, REST api, построенный на [golang](go.dev), для получения дополнительной информации проверьте выделенный репоз git [nutrixpos/pos](https://github.com/nutrixpos/pos), pos использует документную базу данных, построенную с [mongo](https://www.mongodb.com/)

#### posui (Клиентская часть)
Пользовательский интерфейс Nutrix, веб-приложение, построенное на [vue](https://vuejs.org/), код включен в подкаталог [pos/frontend](https://github.com/nutrixpos/pos/tree/main/frontend).

#### zitadel (oidc auth)
Zitadel используется для проверки подлинности пользователей системы с использованием протокола [oidc](https://openid.net/developers/how-connect-works/), для получения дополнительной информации проверьте официальную веб-страницу Zitadel [https://zitadel.com/](https://zitadel.com/)