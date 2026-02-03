---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: ""
  text: "The Piece of Cake <span class='gradiented'>Restaurant Management System</span>"
  tagline: A minimalist open source approach.
  image:
    src: https://elmawardy.sirv.com/Images/nutrix_wallpaper2-min.png
    alt: nutrix-icon
  actions:
    - theme: brand
      text: Download now - it's free ↗
      link: https://github.com/nutrixpos/pos/releases/latest
    - theme: alt
      text: Meet an advisor
      link: /support

# features:
#   - title: Cashier
#     icon: 🖨
#     details: Seamless order creation with high level of control to inventory consumption
#   - title: Kitchen
#     icon: 🍳
#     details: On demand simple interface for displaying and finishing orders, to be used inside the kitchen
#   - title: Inventory
#     icon: 🗄️
#     details: Easily manage your inventory and stay notified about low stock
#   - title: Reports
#     icon: 📈
#     details: Observe inventory consumptions, sales and profit per day down to the product's components level.
---

<h2 class="text-center">What's new</h2>
<h4 style="color:var(--vp-c-text-2)" class="text-center">
  Catch up on the recent launches, events, and success stories across NutrixPOS.
</h4>

<div class="flex mt-6 flex-wrap gap-3 justify-content-center">
  <Card style="width: 20rem; overflow: hidden">
      <template #header>
          <div style="width: 100%;height: 14rem;background-color: var(--vp-c-text-2);">
            <img alt="user header" src="https://qatar.websummit.com/wp-media/2024/02/Centre-Stage-Opening-Night-Welcome-to-Web-Summit-Qatar--1024x683.jpg" style="width: 100%;height: 100%;object-fit: cover;" />
          </div>
      </template>
      <template #content>
          <div class="flex align-items-center gap-2">
            <Badge>Event</Badge>
            <h4 class="m-0 p-0">Web Summit Qatar 2026</h4>
          </div>  
          <p class="m-0 mt-3 p-0" style="line-height: 1.5;">
              NutrixPOS was featured in the <a href="https://qatar.websummit.com/">Web Summit Qatar 2026</a> exhibition. We would love to connect with you there !
          </p>
      </template>
      <template #footer>
          <div class="flex gap-4 mt-1">
              <a href="https://qatar.websummit.com/" target="_blank">
                <Button variant="text" icon="pi pi-external-link" />
              </a>
          </div>
      </template>
  </Card>
  <Card style="width: 20rem; overflow: hidden">
      <template #header>
          <div style="width: 100%;height: 14rem;background-color: var(--vp-c-text-2);">
            <img alt="user header" src="https://elmawardy.sirv.com/nutrix_workflows_illustration.svg" style="width: 100%;height: 100%;object-fit: cover;" />
          </div>
      </template>
      <template #content>
            <div class="flex align-items-center gap-2">
              <Badge style="background-color: #FFDC00;color:black ">Feature</Badge>
              <h4 class="m-0 p-0"> Nutrix Workflows <span role="img" aria-label="rocket launch" class="ml-1">🚀</span></h4>
            </div>
            <p class="m-0 mt-3 p-0" style="line-height: 1.5;">
                Now inside NutrixHub you can set up a workflow, so when your stock is going down you can automatically send a message, submit an order to your supplier, or whatever action you want to take with n8n powered workflows.
            </p>
      </template>
  </Card>
    <Card style="width: 20rem; overflow: hidden">
      <template #header>
          <div style="width: 100%;height: 14rem;background-color: var(--vp-c-text-2);">
            <img alt="user header" src="https://elmawardy.sirv.com/koptan_ai_illustration.svg" style="width: 100%;height: 100%;object-fit: cover;" />
          </div>
      </template>
      <template #content>
            <div class="flex align-items-center gap-2">
              <Badge style="background-color: #FFDC00;color:black ">Feature</Badge>
              <h4 class="m-0 p-0"> Koptan AI Assistant <span role="img" aria-label="rocket launch" class="ml-1">🚀</span></h4>
            </div>
            <p class="m-0 mt-3 p-0" style="line-height: 1.5;">
                Koptan AI is an AI-powered chatbot that can help you with your orders, inventory, and sales.
            </p>
      </template>
  </Card>
</div>





## Explore
<div class="grid pt-0 py-6 px-0">
  <div class="col-12 lg:col-5 lg:pr-6">
    <h1>Intuitive <span class="gradiented">order creation</span> experience</h1>
    <h4 class="mt-3" style="color:var(--vp-c-text-2)">
      Specifically built for restaurants, which eliminates the unwanted complexities and helps you focus on what really matters.
    </h4>
    <ol>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Easily divide your products to categories
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Know the potential of your inventory
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Draft current order and continue with other customers
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Receive notifications on low stock
        </h5>
      </li>
    </ol>
  </div>
  <div class="col-12 lg:col-7 mt-3 lg:mt-0 flex justify-content-center align-items-center">
    <Image src="https://elmawardy.sirv.com/Images/nutrix_cashier3.png" alt="Image" preview />
  </div>
</div>

<div class="grid pt-0 pb-6 pt-5 px-0">
  <div class="col-12 lg:col-7 mt-3 lg:mt-0 flex justify-content-center align-items-center">
    <Image src="https://elmawardy.sirv.com/Images/admin.png" alt="Image" preview />
  </div>
  <div class="col-12 lg:col-5 lg:pl-6 lg:pt-3">
    <h1><span class="gradiented">Administrate</span> with ease</h1>
    <h4 class="mt-3" style="color:var(--vp-c-text-2)">
      Easily manage your restaurant inventory and get insights about your sales
    </h4>
    <ul>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Observe your cost/sales trend
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Know your best selling products
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Manage your inventory and set up alerts on low stock
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Get exact sales per day and know how much profit you made
        </h5>
      </li>
    </ul>
  </div>
</div>

<Card class="mb-6 mt-3">
    <template #content>
        <p class="m-0 grid">
            <div class="lg:col-6 col-12 flex flex-column justify-content-center">
              <h3 style="font-size:2rem">Nutrix hub</h3>
              <p class="p-1 mt-3">
                Powerful SaaS platform that turns data from your NutrixPOS instances into actionable growth insights. Get AI-driven sales offers, monitor real-time performance and inventory, and access dedicated support—all from one centralized hub.
              </p>
            </div>
            <div class="lg:col-6 col-12">
              <Image src="https://elmawardy.sirv.com/Screenshot%202025-11-09%20165115.png" alt="Image" preview />
            </div>
        </p>
    </template>
</Card>



<div class="grid md:p-5 mt-3">
  <div class="col-12 md:col-6">
      <h1>Stay<span class="gradiented"> free</span> stay open source</h1>
      <h5 class="mt-3" style="color:var(--vp-c-text-2)">
          Open source is more than free software—it’s about building a community that works together to create something meaningful for everyone.
      </h5>
  </div>
  <div class="col-12 flex m-0 mt-2 p-0">
    <a href="https://github.com/nutrixpos/">
      <Button style="background-color: var(--vp-c-brand); border-color:var(--vp-c-brand);color:var(--vp-button-brand-text)" rounded label="Contribute" icon="pi pi-github" size="small" class="mx-1"/>
    </a>
    <a href="https://t.me/nutrixpos">
      <Button style="color:#3390EC;background-color:white;" severity="secondary" rounded label="Connect" icon="pi pi-telegram" size="small" class="mx-1"/>
    </a>
    <a href="/sponsor.html">
      <Button style="color:#F15669;background-color:white;" severity="secondary" rounded label="Sponsor" icon="pi pi-heart" size="small" class="mx-1"/>
    </a>
  </div>
</div>

