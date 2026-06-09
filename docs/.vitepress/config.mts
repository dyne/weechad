import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  title: 'WeeChad',
  description: 'A sharp, private-by-default WeeChat setup with no dotfile archaeology.',
  base,
  appearance: true,
  cleanUrls: true,
  srcExclude: ['dyne-vitepress/**'],
  head: [
    ['link', { rel: 'icon', href: `${base}images/favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#cb743b' }]
  ],
  themeConfig: {
    logo: '/images/favicon.svg',
    siteTitle: 'WeeChad',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Get started', link: '/getting-started' },
      { text: 'Privacy', link: '/privacy' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Source', link: 'https://github.com/dyne/weechad' },
      { text: 'About Dyne.org', link: 'https://dyne.org' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyne/weechad' }
    ],
    sidebar: [
      {
        text: 'Use WeeChad',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Privacy with Tomb', link: '/privacy' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Scripts', link: '/scripts' },
          { text: 'Networks', link: '/networks' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Contribute', link: '/contribute' },
          { text: 'License', link: '/license' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/dyne/weechad/edit/main/docs/:path',
      text: 'Improve this page'
    },
    footer: {
      message: 'Built for people who have IRC to read.',
      copyright: 'WeeChad is released into the public domain.'
    }
  }
})
