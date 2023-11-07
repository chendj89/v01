import { createRect, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'
export default defineComponent({
  name: 'GridCell',
  props: {
    ...GridProps,
    isGrid: {
      type: Boolean,
      default: false
    },
    noBg: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const grid = inject('grid') as Ref
    const getRect = () => {
      const config = assign({}, grid.value, props)
      return createRect(config)
    }
    const style = ref(getRect())
    watch(
      () => props,
      (oProps) => {
        style.value = getRect()
      },
      { deep: true }
    )
    return {
      style
    }
  },
  render() {
    return (
      <div class={['grid-cell', { nobg: this.$props.noBg }]} style={this.style}>
        {this.$slots.default ? (
          this.$slots.default()
        ) : (
          <div class="grid-fill"></div>
        )}
      </div>
    )
  }
})
