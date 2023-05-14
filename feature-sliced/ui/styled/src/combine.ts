import type { StyleFn } from './style-fn.js'

export function combine(...funcs: Array<(...args: any[]) => any>): StyleFn {
  return (...args) => Object.assign({}, ...funcs.map(func => func(...args)))
}
