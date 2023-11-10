<template>
  <div class="vtBanner">
    <div class="vtBanner-cell" style="--left:0" @click="click">
      <div class="vtBanner-cell-close"></div>
    </div>
    <div class="vtBanner-cell" style="--left:1" @click="click">2</div>
  </div>
</template>

<script setup lang="ts" name="VtBanner">
const isReducedMotion = () => {
  return (
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  )
}
const click = (ev: any) => {
  if (isReducedMotion()) {
    return
  }
  if (ev.target.classList.contains('vtBanner-cell')) {
    // @ts-ignore
    document.querySelectorAll('.vtBanner-cell').forEach((cell: HTMLElement) => {
      if (cell == ev.target) {
        cell.style.zIndex = 1;
      } else {
        cell.style.zIndex = '';
      }
    });
    ev.target.style.viewTransitionName = 'vt'
    // @ts-ignore
    document.startViewTransition(() => {
      ev.target.classList.toggle('active')
      ev.target.style.viewTransitionName = ''
      console.log('==--')
    });
  }
  if (ev.target.classList.contains('vtBanner-cell-close')) {

    ev.target.parentNode
      .style.viewTransitionName = 'vt'
    // @ts-ignore
    document.startViewTransition(() => {
      ev.target.parentNode
        .classList.remove('active')
      ev.target.parentNode
        .style.viewTransitionName = ''
    });
  }

}

</script>

<style lang="scss">
.vtBanner {
  width: 360px;
  height: 160px;
  background: seagreen;
  position: relative;
  overflow: clip;
  border-radius: var(--radius);

  &-cell {
    position: absolute;
    left: calc(var(--left) * 40px + (var(--left) + 1) * 10px);
    top: 10px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: var(--radius);
    padding: 10px;

    &.active {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #ff5c00;
      cursor: default;
    }

    &-close {
      display: none;
      position: absolute;
      right: 10px;
      top: 10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }

    &.active &-close {
      display: block;
    }
  }
}

::view-transition-old(vt) {
  display: none;
}

::view-transition-new(vt) {
  animation: none;
  animation-duration: 0.2s;
}
</style>