import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LabDocs",
  description: "KUET CSE Lab Works and Docs by @Faysal",
  base: '/mathDiary/',
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
        text: 'MIT-18.650-Statistics-for-Applications',
        collapsed: false,
        items: [
          { text: 'Lecture 1', link: '/MIT-18.650-Statistics-for-Applications/Lecture1.md' },
        ]
      },
      {
        text: '6.041_MITOpenCourseWare_Probability',
        collapsed: false,
        items: [
          { text: 'Lecture 1', link: '/6.041_MITOpenCourseWare_Probability/probability_lecture_1.md' },
        ]
      },
      {
        text: 'Probability-Statistics',
        collapsed: false,
        items: [
          { text: 'Lecture 1', link: '/Probability-Statistics/probability_lecture_1.md' },
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
