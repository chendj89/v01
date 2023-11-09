export interface iCreateRect {
  left: number
  top: number
  col: number
  row: number
  gap: number | { col: number; row: number }
  border: number
  radius: number
  size: number
  width: number
  height: number
  unit: 'px' | '%' | 'vw' | 'vh' | null
}
export type tCreateRectType = '' | 'grid' | 'container'
let defaults: iCreateRect = {
  left: 0,
  top: 0,
  col: 1,
  row: 1,
  border: 10,
  gap: 10,
  size: 40,
  radius: 6,
  unit: 'px',
  width: 0,
  height: 0
}
export const createGrid = (
  params: Partial<iCreateRect>,
  type: tCreateRectType = ''
) => {
  let opts: iCreateRect = Object.assign({}, defaults, params)
  let gapCol = typeof opts.gap === 'number' ? opts.gap : opts.gap!.col
  let gapRow = typeof opts.gap === 'number' ? opts.gap : opts.gap!.row
  let size = opts.size
  let border = 2 * opts.border
  let left = opts.left * (gapCol + size)
  let top = opts.top * (gapRow + size)
  let width = opts.col * size + (opts.col - 1) * gapCol
  let height = opts.row * size + (opts.row - 1) * gapRow
  let result: Record<string, any> = {
    left,
    top,
    width,
    height
  }
  if (type == 'grid') {
    result.width += border
    result.height += border
  }
  if (opts.unit) {
    for (let attr in result) {
      result[attr] = result[attr] + opts.unit
    }
  }
  return result
}

export const createGridCell = (params: Partial<iCreateRect>) => {
  let opts: iCreateRect = Object.assign({}, defaults, params)
  let gapCol = typeof opts.gap === 'number' ? opts.gap : opts.gap!.col
  let gapRow = typeof opts.gap === 'number' ? opts.gap : opts.gap!.row
  let size = opts.size
  let left = opts.left * (gapCol + size) + opts.border
  let top = opts.top * (gapRow + size) + opts.border
  let width = opts.col * size + (opts.col - 1) * gapCol
  let height = opts.row * size + (opts.row - 1) * gapRow
  let result: Record<string, any> = {
    left,
    top,
    width,
    height
  }
  if (opts.unit) {
    for (let attr in result) {
      result[attr] = result[attr] + opts.unit
    }
  }
  return result
}
