import { createGrid, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'
import { defineExpose } from 'vue'
export default defineComponent({
  name: 'Grid',
  props: {
    ...GridProps,
    isGrid: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const grid = inject('grid') as Ref
    const config = assign({}, grid.value, props)
    const ins: any = getCurrentInstance()
    const childConfig: any = ref({
      size: config.size,
      gap: config.gap
    })
    // 是否嵌套
    if (ins?.parent?.type?.name == 'Grid') {
      config.isGrid = false
      let border = 2 * config.border
      let width =
        config.col * config.size + (config.col - 1) * config.gap + border
      let height =
        config.row * config.size + (config.row - 1) * config.gap + border

      if (config.col > config.row) {
        childConfig.value.size =
          (height - (config.row - 1) * config.gap - 2 * border) / config.row
        let gapCol =
          (width - config.col * childConfig.value.size - 2 * border) /
          (config.col - 1)
        childConfig.value.gap = {
          col: gapCol,
          row: config.gap
        }
      } else {
        childConfig.value.size =
          (width - (config.col - 1) * config.gap - 2 * border) / config.col
        let gapRow =
          (height - config.row * childConfig.value.size - 2 * border) /
          (config.row - 1)
        childConfig.value.gap = {
          col: config.gap,
          row: gapRow
        }
      }
    }
    const style = ref(createGrid(config))
    return {
      style,
      childConfig
    }
  },
  render() {
    return (
      <div class="grid" style={this.style}>
        {this.$slots.default?.()}
      </div>
    )
  }
})
