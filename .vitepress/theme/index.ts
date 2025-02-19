// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'


import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css'
import { Button, Image } from 'primevue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    app.component('Image',Image)
    app.component('Button',Button)
  }
} satisfies Theme
