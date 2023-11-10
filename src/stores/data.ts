import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref([
    {
      type: 'learn',
      url: 'https://scroll-driven-animations.style/',
      name:'Scroll-driven动画',
      desc: '一堆演示和工具来展示滚动驱动动画',
      love: 2
    },
    {
      type: 'learn',
      url: 'https://nerdy.dev/',
      name:'nerdy',
      desc: '个人blog',
      love: 1
    },
    {
      type: 'tolk',
      url: 'https://elk.zone/',
      name:'鹿鸣',
      desc: '一个灵巧的 Mastodon 客户端',
      love: 0
    }
  ])
  return { data }
})
