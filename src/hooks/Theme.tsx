import gsap from 'gsap'
export default defineComponent({
  name: 'Theme',
  setup() {
    const ele = ref()
    const doc: any = document
    const isDark = ref(document.documentElement.classList.contains('dark'))
    const isAnimate = ref(false)
    /**
     * 判断当前动画是否在执行
     */
    const isReducedMotion = () => {
      return (
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
      )
    }
    /**
     * 切换主题
     */
    const toggleTheme = () => {
      doc.documentElement.classList.toggle('dark')
    }
    /**
     * 设置主题 
     */
    const setTheme = (event?: MouseEvent) => {
      animate(() => {
        if (!doc.startViewTransition || isReducedMotion()) {
          toggleTheme()
          return
        }
        const transition = doc.startViewTransition(() => {
          toggleTheme()
        })
        transition.ready.then(() => {
          doc.documentElement.style.setProperty('--x', event!.clientX + 'px')
          doc.documentElement.style.setProperty('--y', event!.clientY + 'px')
        })
      })
    }
    const animate = (cb: any) => {
      let star: any = ele.value.querySelector('.theme-icon')
      let button = ele.value
      if (isAnimate.value) {
        return
      }
      isAnimate.value = true
      gsap.to(button, {
        keyframes: [
          {
            '--icon-y': '-36px',
            duration: 0.3,
            ease: 'power2.out'
          },
          {
            '--icon-y': '48px',
            '--icon-scale': 0.4,
            duration: 0.325
          },
          {
            '--icon-y': '-64px',
            '--icon-scale': 1,
            duration: 0.45,
            ease: 'power2.out',
            onStart() {
              if (!isDark.value) {
                star.innerHTML = '🌚'
              } else {
                star.innerHTML = '🌞'
              }
              isDark.value = !isDark.value
              cb && cb()
            }
          },
          {
            '--icon-y': '0px',
            duration: 0.45,
            ease: 'power2.in'
          },
          {
            '--button-y': '10px',
            duration: 0.11
          },
          {
            '--button-y': '0px',
            duration: 0.125
          }
        ],
        clearProps: true,
        onComplete() {
          isAnimate.value = false
        }
      })
      gsap.to(button, {
        keyframes: [
          {
            '--icon-hole-scale': 0.6,
            duration: 0.5,
            ease: 'elastic.out(1, .75)'
          },
          {
            '--icon-hole-scale': 0,
            duration: 0.2,
            delay: 0.2
          }
        ]
      })
      gsap.to(button, {
        '--icon-rotate': '360deg',
        duration: 1.76,
        clearProps: true
      })
    }
    return {
      ele,
      setTheme,
      isAnimate
    }
  },
  render() {
    return (
      <div
        ref="ele"
        onClick={this.setTheme}
        class={['theme', { loading: this.isAnimate }]}
      >
        <div class="theme-hole">
          <div class="theme-icon">🌞</div>
        </div>
      </div>
    )
  }
})
