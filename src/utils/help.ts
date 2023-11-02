/**
 * 合并属性 过滤undefined, null
 * @returns
 */
export function assign(target: any, ...sources: any) {
  for (const source of sources) {
    for (const key in source) {
      const value = source[key]
      if (![undefined, null].includes(value)) {
        target[key] = value
      }
    }
  }
  return target
}
