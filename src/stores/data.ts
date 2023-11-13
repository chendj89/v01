import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref([
    {
      type: 'learn',
      url: 'https://scroll-driven-animations.style/',
      name: 'Scroll-driven动画',
      desc: '一堆演示和工具来展示滚动驱动动画',
      love: 2
    },
    {
      type: 'learn',
      url: 'https://nerdy.dev/',
      name: 'nerdy',
      desc: '个人blog',
      love: 1
    },
    {
      type: 'tolk',
      url: 'https://elk.zone/',
      name: '鹿鸣',
      desc: '一个灵巧的 Mastodon 客户端',
      love: 0
    }
  ])
  const my = ref([
    {
      type: 'ower',
      url: 'https://github.com/',
      name: 'github',
      desc: '仓库',
      love: 0,
      icon:'https://api.iconify.design/devicon:github-wordmark.svg?color=%23888888'
    },
    {
      type: 'ower',
      url: 'https://github.com/chendj89',
      name: 'github',
      desc: '九转灵山',
      love: 0,
      icon:'https://api.iconify.design/skill-icons:githubactions-dark.svg?color=%23888888'
    }
  ])
  return { data }
})
