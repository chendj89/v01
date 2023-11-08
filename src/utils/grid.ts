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
  isGrid: boolean
  unit: 'px' | '%' | 'vw' | 'vh' | null
}
/**
 * 获取最接近的数
 * @param num
 * @param list
 * @returns
 */
export const closestToNum = (num: number, list: number[]): number => {
  let closest = list[0]
  console.log(list)
  let minDiff = Math.abs(num - list[0])
  for (let i = 1; i < list.length; i++) {
    const diff = Math.abs(num - list[i])
    if (diff < minDiff) {
      minDiff = diff
      closest = list[i]
    }
  }
  return closest
}

export const createGrid = (params: Partial<iCreateRect>) => {
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
    height: 0,
    isGrid: false
  }
  
  let opts: iCreateRect = Object.assign({}, defaults, params)
  let gapCol = typeof opts.gap === 'number' ? opts.gap : opts.gap!.col
  let gapRow = typeof opts.gap === 'number' ? opts.gap : opts.gap!.row
  let size = opts.size
  let border = 2 * opts.border
  if (opts.width&&opts.height) {
    if (opts.col > opts.row) {
      size = (opts.height - (opts.row - 1) * gapRow - 2 * border) / opts.row
      gapCol = (opts.width - opts.col * size - 2 * border) / (opts.col - 1)
    } else {
      size = (opts.width - (opts.col - 1) * gapCol - 2 * border) / opts.col
      let gapRow1 =
        (opts.height - opts.row * size - 2 * border) / (opts.row - 1)
      let gapRow2 =
        (opts.height - (opts.row + 1) * size - 2 * border) / opts.row
      gapRow = closestToNum(opts.border, [gapRow1, gapRow2])
    }
  }
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
  if (opts.isGrid) {
    result.width += border
    result.height += border
  }
  if(opts.size==30){
    result.left+=10
    result.top+=10
  }
  if (opts.unit) {
    for (let attr in result) {
      result[attr] = result[attr] + opts.unit
    }
  }
  return result
}
