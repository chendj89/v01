import { createGrid, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'
export default defineComponent({
  name: 'GridCell',
  props: GridProps,
  setup(props) {
    const grid = inject('grid') as Ref
    const ins: any = getCurrentInstance()
    const getRect = () => {
      const config = assign(
        {},
        grid.value,
        ins.parent.setupState.childConfig,
        props
      )
      return createGrid(config)
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
      <div class="grid-cell" style={this.style}>
        {this.$slots.default ? (
          this.$slots.default()
        ) : (
          <div class="grid-fill"></div>
        )}
      </div>
    )
  }
})
