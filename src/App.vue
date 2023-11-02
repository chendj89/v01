<script setup lang="ts">
import type { iCreateRect } from '@/utils'
// @ts-ignore
import scss from '@/scss/mixin/alias.module.scss'
for (let attr in scss) {
  // 将字符串数字转换为数字
  if (!isNaN(scss[attr])) {
    scss[attr] = parseInt(scss[attr])
  }
}
type tGrid = Pick<iCreateRect, 'border' | 'gap' | 'size' | 'radius'>
const grid = shallowReadonly(ref<tGrid>(scss))
provide('grid', grid)
</script>
<template>
  <RouterView />
</template>
