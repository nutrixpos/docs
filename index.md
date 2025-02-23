---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: ""
  text: "The Piece of Cake <span class='gradiented'>Restaurant Management System</span>"
  tagline: A minimalist open source restaurant management system.
  image:
    src: https://elmawardy.sirv.com/Images/nutrix_wallpaper.png
    alt: nutrix-icon
  actions:
    - theme: brand
      text: Start now - it's free
      link: /getting_started
    - theme: alt
      text: Meet an advisor
      link: /api-examples

features:
  - title: Cashier
    icon: 🖨
    details: Seamless order creation with high level of control to inventory consumption.
  - title: Kitchen
    icon: 🍳
    details: Simple interface for starting and finishing orders, to be used by chefs or supervisors
  - title: Inventory
    icon: 🗄️
    details: Have good observability to inventory consumption and receive alerts on low stock.
  - title: Reports
    icon: 📈
    details: Have good observability to inventory consumption and receive alerts on low stock.
---

<div class="grid pt-0 mt-7 py-6 px-5" style="background-color:var(--vp-c-bg-soft);border-radius: 12px;">
  <div class="col-12 lg:col-5 lg:pr-6 lg:pt-3">
    <h1>An intuitive <span class="gradiented">interface</span></h1>
    <h4 class="mt-3" style="color:var(--vp-c-text-2)">
      Specifically built for restaurants, which eliminates the unwanted complexities and helps you focus on what really matters.
    </h4>
    <ol>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Know the potential of your inventory
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Get notifications on low stock
        </h5>
      </li>
      <li>
        <h5 style="color: var(--vp-c-text-2);">
          Know the potential of your inventory
        </h5>
      </li>
    </ol>
  </div>
  <div class="col-12 lg:col-7 mt-3 lg:mt-0 flex justify-content-center align-items-center">
    <Image src="./assets/cashier.png" alt="Image" preview />
  </div>
</div>

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
    <a href="/sponsor">
      <Button style="color:#F15669;background-color:white;" severity="secondary" rounded label="Sponsor" icon="pi pi-heart" size="small" class="mx-1"/>
    </a>
  </div>
</div>

