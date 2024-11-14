import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LabDocs",
  description: "KUET CSE Lab Works and Docs by @Faysal",
  base: '/diary/',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/3-2_Lab_works/google-docs.png' }]],
  
  themeConfig: {
    logo: '/physics.png',
    search:{
      provider:'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lab Works', link: '/CSE_3202-OS_Lab/Lab_1/README' }
    ],
    

    sidebar: [
      {
        text: 'CSE 3202 : OS',
        collapsed: false,
        items: [
          { text: 'Lab 1: Intro to Terminal', link: '/CSE_3202-OS_Lab/Lab_1/README' },
          { text: 'Lab 2: Intro to Bash', link: '/CSE_3202-OS_Lab/Lab_2/README' },
          { text: 'Lab 3: Intro to Bash 2', link: '/CSE_3202-OS_Lab/Lab_3/README' },
          { text: 'Lab 4: Intro to Vim', link: '/CSE_3202-OS_Lab/Lab_4/README' },
        ]
      },
      {
        text: 'CSE 3212 : Compiler',
        collapsed: false,
        items: [
          { text: 'Lab 1: Intro to Flex', link: '/CSE_3212-Compiler_Lab/Lab_1/README' },
          { text: 'Lab 2: Intro to Flex 2', link: '/CSE_3212-Compiler_Lab/Lab_2/README' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Faysal-star/3-2_Lab_works' }
    ]
  },

  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
})
