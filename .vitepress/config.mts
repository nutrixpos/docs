import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nutrix",
  description: "The Piece of Cake Restaurant management",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/getting_started' },
      { text: 'Support', link: '/support' },
      { text: 'Docs', link: '/architecture' },
      { text: 'Sponsor', link: '/sponsor' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting started', link: '/getting_started' },
          { text: 'Architecture', link: '/architecture' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nutrixpos' }
    ],

    logo: { light: '/logo.png', dark: 'logo-inverse.png', alt: 'logo' },

    footer: {
      message: 'Released under the GPL-2.0 License.',
      copyright: 'Copyright © 2025 Amr Elmawardy'
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
