---
outline: deep
---

# المصادقة

يستخدم NutrixPOS [OIDC](https://openid.net/developers/how-connect-works/) للمصادقة. تحتاج إلى إضافة موفر OIDC حتى يتمكن NutrixPOS من المصادقة ضده. في هذا الدليل سنرشدك حول كيفية القيام بذلك باستخدام [Zitadel](https://zitadel.com/).

يرجى الرجوع إلى وثائق [Zitadel](https://zitadel.com/) للحصول على عملية التثبيت.

بعد تثبيت Zitadel و [تثبيت NutrixPOS](/ar/userguide/installation.html) ، تابع القسم التالي لإضافة المصادقة.
## خطوات ما بعد تثبيت Zitadel
ستأخذك الخطوات التالية خلال عملية تثبيت Zitadel من خلال واجهة مستخدم Zitadel GUI.

### إنشاء مشروع Zitadel جديد:

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel0.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel1.png)

### إنشاء تطبيق API جديد دعنا نسميه "backend":
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel2.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel3.png)

اختر طريقة المصادقة JWT
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel4.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel5.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel6.png)

#### إنشاء مفتاح جديد لتطبيق "backend" API
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel7.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel8.png)

#### تحميل وحفظ ملف المفتاح
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel9.png)

#### أضف ملف المفتاح المنزل إلى /mnt/zitadel-key.json داخل الدليل الجذر لمشروع الخلفية nutrixpos.
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel10.png)

#### تحرير ملف config.yaml في الدليل الجذر للملف الثنائي للخلفية وتحرير قسم Zitadel كما يلي:
``` yaml
zitadel:
  domain: "zitadel"
  port: 8081
  # هذا هو المسار إلى مفتاح Zitadel الخاص بك 
  # مرتبط بدليل الجذر الخاص بك
  key_path: "./mnt/zitadel-key.json" 
  enabled: true
```


الآن تطبيق الواجهة الخلفية جاهز للمصادقة ضد Zitadel.
في الخطوات التالية سننتقل إلى تكوين المصادقة للواجهة الأمامية.


### إنشاء تطبيق وكيل المستخدم "frontend"
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel2.png)

اختر نوع تطبيق "User agent" دعنا نسميه "frontend"
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel11.png)

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel12.png)

الآن في هذه الصفحة 
- تفعيل "Development Mode"
- إعادة توجيه URIs
    - أضف http://localhost:8080/auth/signinwin/zitadel
        - يجب أن تعمل الواجهة الأمامية على :8080
- Post Logout URIs
    - أضف http://zitadel:8081/
    ::: tip
        تأكد من أن Zitadel يحل إلى 127.0.0.1
        على Windows يمكنك إضافة ذلك في ملف المضيفين
        على Linux /etc/hosts
    :::
    

![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel13.png)


#### إضافة خصائص تطبيق Zitadel ذات الصلة إلى ملف frontend/.env
``` env
VITE_APP_BACKEND_HOST=localhost:8000
VITE_APP_MODULE_CORE_API_PREFIX=/core
VITE_APP_ZITADEL_PROJECT_RESOURCE_ID=323062603569954818
VITE_APP_ZITADEL_CLIENT_ID=323067089445257218
VITE_APP_ZITADEL_ISSUER=http://zitadel:8081/
VITE_APP_ZITADEL_ENABLED=true
```
VITE_APP_ZITADEL_PROJECT_RESOURCE_ID: معرف مشروع Zitadel
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel15.png)

VITE_APP_ZITADEL_CLIENT_ID: معرف العميل من تطبيق الواجهة الأمامية
![خطوات ما بعد تثبيت Zitadel](https://elmawardy.sirv.com/nutrixpos-docs/zitadel16.png)

الآن بعد تحديث ملف .env ، عليك (للأسف) إعادة بناء تطبيق الواجهة الأمامية باستخدام ملف .env الجديد. 
يمكنك العثور على تطبيق الواجهة الأمامية في دليل [Frontend](https://github.com/nutrixpos/pos/tree/main/frontend)

::: tip
يُنصح بإنشاء الواجهة الأمامية من علامة git أو commit hash المماثل للنشر
:::

بعد ذلك تتم إضافة المصادقة / التفويض إلى التطبيق.

::: warning
يجب عليك الحفاظ على خادم Zitadel. وإلا فقد يتوقف التطبيق عن العمل.
:::


