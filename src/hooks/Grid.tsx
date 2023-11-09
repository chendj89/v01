import { createGrid, assign, closestToNum } from '@/utils'
import { GridProps } from '@/hooks/Props'
import type * as CSS from 'csstype'

export default defineComponent({
  name: 'Grid',
  props: GridProps,
  setup(props) {
    const grid = inject('grid') as Ref
    const config = assign({}, grid.value, props)
    const ins: any = getCurrentInstance()
    const isNest = ref(ins?.parent?.type?.name == ins.type.name)
    const style = ref<CSS.Properties>(
      createGrid(config, isNest.value ? 'container' : 'grid')
    )
    if (isNest.value) {
      style.value.border = 'none'
      style.value.outline = '1px dashed'
    }
    return {
      style,
      isNest
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
