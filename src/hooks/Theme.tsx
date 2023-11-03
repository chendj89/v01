import gsap from 'gsap'
export default defineComponent({
  name: 'Theme',
  setup() {
    const ele = ref()
    const doc: any = document
    const isReducedMotion = () => {
      return (
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
      )
    }
    const toggleTheme = () => {
      doc.documentElement.classList.toggle('dark')
    }
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
    let i = 1
    const animate = (cb) => {
      let star = document.querySelector('.star')
      document.querySelectorAll('.favorite-button').forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault()

          if (button.classList.contains('animated')) {
            return
          }
          button.classList.add('animated')
          gsap.to(button, {
            keyframes: [
              {
                '--star-y': '-36px',
                duration: 0.3,
                ease: 'power2.out'
              },
              {
                '--star-y': '48px',
                '--star-scale': 0.4,
                duration: 0.325,
                onStart() {
                  button.classList.add('star-round')
                }
              },
              {
                '--star-y': '-64px',
                '--star-scale': 1,
                duration: 0.45,
                ease: 'power2.out',
                onStart() {
                  if (i % 2 == 1) {
                    star.innerHTML = '🌚'
                  } else {
                    star.innerHTML = '🌞'
                  }
                  i++
                  button.classList.toggle('active')
                  cb && cb()
                  setTimeout(() => button.classList.remove('star-round'), 100)
                }
              },
              {
                '--star-y': '0px',
                duration: 0.45,
                ease: 'power2.in'
              },
              {
                '--button-y': '3px',
                duration: 0.11
              },
              {
                '--button-y': '0px',
                '--star-face-scale': 0.65,
                duration: 0.125
              },
              {
                '--star-face-scale': 1,
                duration: 0.15
              }
            ],
            clearProps: true,
            onComplete() {
              button.classList.remove('animated')
            }
          })

          gsap.to(button, {
            keyframes: [
              {
                '--star-hole-scale': 0.8,
                duration: 0.5,
                ease: 'elastic.out(1, .75)'
              },
              {
                '--star-hole-scale': 0,
                duration: 0.2,
                delay: 0.2
              }
            ]
          })
          gsap.to(button, {
            '--star-rotate': '360deg',
            duration: 1.55,
            clearProps: true
          })
        })
      })
    }
    return {
      ele,
      setTheme
    }
  },
  render() {
    return (
      <div ref="ele" onClick={this.setTheme} class="favorite-button">
        <div class="icon">
          <div class="star">🌞</div>
        </div>
      </div>
    )
  }
})
