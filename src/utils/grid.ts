export interface iCreateRect {
  left: number
  top: number
  col: number
  row: number
  gap: number
  border: number
  radius: number
  size: number
  isGrid: boolean
  unit: 'px' | '%' | 'vw' | 'vh' | null
}
/**
 * 创建单元格
 */
export const createRect = (params: Partial<iCreateRect>) => {
  let opts = Object.assign(
    {},
    {
      left: 0,
      top: 0,
      col: 1,
      row: 1,
      border: 10,
      gap: 10,
      size: 40,
      radius: 6,
      isGrid: false,
      unit: 'px'
    },
    params
  )
  let left = opts.left * (opts.gap + opts.size)
  let top = opts.top * (opts.gap + opts.size)
  let width = opts.col * opts.size + (opts.col - 1) * opts.gap
  let height = opts.row * opts.size + (opts.row - 1) * opts.gap
  let result: Record<string, any> = {
    left,
    top,
    width,
    height
  }
  if (opts.isGrid) {
    result.width += opts.border * 2
    result.height += opts.border * 2
  }
  if (opts.unit) {
    for (let attr in result) {
      result[attr] = result[attr] + opts.unit
    }
  }
  return result
}
