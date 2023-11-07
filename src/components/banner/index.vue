<template>
  <div ref="eleRef" class="banner" @click="animate">
    <img class="banner-logo" src="https://api.iconify.design/vscode-icons:file-type-vite.svg" alt="">
    <div class="banner-content">
      <div class="banner-title">
        <div class="banner-title-name">Vite</div>
      </div>
      <div class="banner-desc">
        <span>下</span>
        <span>一</span>
        <span>代</span>
        <span>的</span>
        <span>前</span>
        <span>端</span>
        <span>工</span>
        <span>具</span>
        <span>链</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Banner">
import gsap from 'gsap'
const eleRef = ref()
const animate = () => {
  const ele = eleRef.value!;
  let tl = gsap.timeline();
  const bannerLogo = ele.querySelector('.banner-logo')
  const bannerName = ele.querySelector('.banner-title-name')
  const bannerDesc = ele.querySelectorAll('.banner-desc span')
  tl.add(gsap.from(bannerLogo, { duration: 0.5, scale: 0.2, opacity: 0, ease: 'Back.easeOut', transformOrigin: "50% 50%" }))
    .add(gsap.from(bannerName, { duration: 0.5, yPercent: 115, ease: ' Back.easeOut ' }), "greensock")
    .add(gsap.from(bannerDesc, { duration: 0.2, y: -20, opacity: 0, stagger: 0.075 }), '-=0.2')
  tl.play()
}
defineExpose({
  reload:animate
})
onMounted(() => {
  animate()
})

</script>

<style lang="scss" scoped>
.banner {
  display: inline-flex;
  background: #000;
  padding: 10px;
  border-radius: var(--radius);
  width: 100%;
  height: 100%;
  pointer-events: none;

  .dark & {
    background: #3f51b5;
  }

  &-logo {
    width: 80px;
  }

  &-content {
    flex: 1;
    color: #fff;
    padding: 10px;
  }

  &-title {
    font-size: 30px;
    height: 30px;
    overflow: hidden;
    display: flex;

    &-name {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      font-weight: 600;
      background: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &-desc {
    padding-top: 10px;
    color: #fff;
    font-size: 0;

    span {
      font-size: 12px;
      position: relative;
      display: inline-block;
    }
  }
}
</style>