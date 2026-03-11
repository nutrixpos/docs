# Installation

This page demonstrates the installation process of the [nutrix restaurant management system](/).

::: info
Please note that the current installation packages offer the minimal installation required to run the system, which don't include the authentication features.

If you want to add authentication kindly check the [Authentication](/docs/authentication) docs page
:::

## Prerequisites
NutrixPOS operates on MongoDB for storing orders, inventory, sales and other data, so it's required to have a running MongoDB server instance. Check their download page at [http://mongodb.com/try/download/community](http://mongodb.com/try/download/community)

## Download

Visit the [Download](https://github.com/nutrixpos/pos/releases/latest) page to find the latest version of NutrixPOS. 

For windows download the file with the postfix **windows64.exe**

## Installation process

After downloading the executable from the latest step, and having a running MongoDB instance, just run the nutrixpos installation file and follow the prompts. After installation finishes just run Nutrixpos executable installed, 

On windows you can find a start menu item called **Nutrixpos**. or a shortcut on the desktop.

After running Nutrixpos for the 1st time, the following setup screen should appear

![NutrixPOS setup](https://elmawardy.sirv.com/nutrixpos-docs/nutrixdocs3.png)

Add your database connection information to the designated fields then click **Test Connection**
if the test Succeed **Save & Continue** button should be enabled. Clicking it will save the database config in the **config.yaml** file 
Then a new **"Let's Go"** button should appear, Click it to be redirected to the cashier page that looks like following

![NutrixPOS setup](https://elmawardy.sirv.com/nutrixpos-docs/nutrixdocs4.png)

Congrats! You have successfully installed NutrixPOS and you're ready to start using it.
