<template>
  <div class="avatar">
    <img v-if="props.src" class="avatar-img" :src="props.src" />
  </div>
</template>

<script setup lang="ts" name="Avatar">
export interface Props {
  src?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: '',
})
</script>

<style lang="scss" scoped>
.avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  overflow: hidden;

  &-img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
