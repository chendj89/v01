import { createRect, assign } from '@/utils'
import { GridProps } from '@/hooks/Props'
export default defineComponent({
  name: 'Grid',
  props: GridProps,
  setup(props) {
    const grid = inject('grid') as Ref
    const config = assign({}, grid.value, props)
    const style = ref(createRect(config))

    let width = parseInt(style.value.width)
    let size =
      (width - (config.col - 1) * config.gap - 2 * config.border) / config.col

    return {
      style,
      size
    }
  },
  render() {
    // opts.col * opts.size + (opts.col - 1) * opts.gap=width
    // (width-(opts.col - 1) * opts.gap)/opts.col
    return (
      <div class="grid" style={this.style}>
        {this.$slots.default &&
          h(
            this.$slots.default,
            this.$props.isGrid ? null : { size: 33 }
          )}
      </div>
    )
  }
})
