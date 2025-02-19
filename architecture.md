---
outline: deep
---

# Architecture

Nutrix is a web application that consists of the following three main subsystems:

#### pos (Backend)
The core system and backend of nutrix, a REST api that's build in [golang](go.dev), for more information check the dedicated git repo [nutrixpos/pos](https://github.com/nutrixpos/pos), pos uses a document based database built with [mongo](https://www.mongodb.com/)

#### posui (Frontend)
The user interface of nutrix, a web application that's build in [vue](https://vuejs.org/), for more information check the dedicated git repo [nutrixpos/posui](https://github.com/nutrixpos/posui)

#### zitadel (oidc auth)
Zitadel is used for authenticating users of the system using [oidc](https://openid.net/developers/how-connect-works/) protocol, for more information check the official webpage of Zitadel [https://zitadel.com/](https://zitadel.com/)