<template>
  <div class="avatar">
    <img
      class="avatar-img"
      src="https://avatars.githubusercontent.com/u/105529957"
    />
  </div>
</template>

<script setup lang="ts" name="Avatar"></script>

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
