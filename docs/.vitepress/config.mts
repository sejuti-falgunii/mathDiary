import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LabDocs",
  description: "Stat Notes by @Sejuti",
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sejuti-falgunii/' }
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
