import { createRect, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'
export default defineComponent({
  name: 'Grid',
  props: GridProps,
  setup(props) {
    const grid = inject('grid') as Ref
    const config = assign({}, grid.value, props)
    const style = ref(createRect(config))
    return {
      style
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
