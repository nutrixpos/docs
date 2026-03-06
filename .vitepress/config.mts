import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NutrixPOS | Restaurants & Retail management system",
  description: "The Piece of Cake Restaurant management",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Downloads', link: 'https://github.com/nutrixpos/pos/releases' },
      { text: 'Docs', link: '/getting_started.html' },
      { text: 'Pricing', link: '/pricing.html' },
      { text: 'About', link: '/about.html' },
      { text: 'Connect', link: '/support.html' },
      { text: 'Sponsor', link: '/sponsor.html' },
    ],

    sidebar: [
      {
        text: 'User guide',
        items: [
          { text: 'Installation', link: '/userguide/installation' },
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'Authentication', link: '/docs/authentication' },
          { text: 'docker-compose', link: '/getting_started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nutrixpos' }
    ],

    logo: { light: '/logo.png', dark: 'logo-inverse.png', alt: 'logo' },

    footer: {
      message: 'Released under the GPL-2.0 License.',
      copyright: 'Copyright © 2026 <a href="https://linkedin.com/in/amr-el-mawardy">Amr Elmawardy</a>'
    }
  },
  // vite: {
  //   resolve: {
  //     alias: [
  //       {
  //         find: /^.*\/VPNavBarMenuLink\.vue$/,
  //         replacement: fileURLToPath(
  //           new URL("../components/VPNavBarMenuLink.vue", import.meta.url)
  //         )
  //       },
  //       {
  //         find: /^.*\/VPLink\.vue$/,
  //         replacement: fileURLToPath(
  //           new URL("../components/VPNavBarMenuLink.vue", import.meta.url)
  //         )
  //       }
  //     ]
  //   }
  // },
})
