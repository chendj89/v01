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
    }
  ])
  return { data }
})
