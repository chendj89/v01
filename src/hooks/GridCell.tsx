import { createGrid, createGridCell, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'

export default defineComponent({
  name: 'GridCell',
  props: GridProps,
  setup(props) {
    const grid = inject('grid') as Ref
    const ins: any = getCurrentInstance()
    const getRect = () => {
      const config = assign({}, grid.value, props)
      let result:any = {}
      if (ins.parent.setupState.isNest) {
        let { width, height } = ins.parent.setupState.style
        const { col, row } = ins.parent.props
        width = parseInt(width)
        height = parseInt(height)
        let size
        let gapCol
        let gapRow
        let border = config.border / 2
        if (width >= height) {
          gapRow = config.gap
          size = (height - (row - 1) * gapRow - 2 * border) / row
          gapCol = (width - col * size - 2 * border) / (col - 1)
        } else {
          gapCol = config.gap
          size = (width - (col - 1) * gapCol - 2 * border) / col
          gapRow = (height - (row - 1) * gapCol - 2 * border) / size
        }
        result = createGridCell({
          ...config,
          size,
          border,
          gap: { col: gapCol, row: gapRow }
        })
      } else {
        result = createGrid(config)
      }
      if (ins.ctx.$slots.default) {
        result.background = 'none'
      }
      return result
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
