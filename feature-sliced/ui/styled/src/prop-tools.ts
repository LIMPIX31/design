import type { StyleFn } from './style-fn.js'
import type { Props } from './props'

export type PropSelector<V> = keyof Props | ((props: Props) => V)

type BooleanMatch = {
  true?: StyleFn
  false?: StyleFn
}

type MatchObject<S> = S extends boolean ? BooleanMatch : { [K in NonNullable<S> as any]?: StyleFn }

function extractPropFromSelector<S>(props: Props, selector: PropSelector<S>): S {
  if (typeof selector === 'function') {
    return selector(props)
  }

  return props[selector as keyof Props] as S
}

export function variants<V = any>(selector: PropSelector<V>, match: MatchObject<V>): StyleFn {
  return ((props: Props) => {
    const prop = extractPropFromSelector(props, selector)

    const variant = match[prop] as any

    return variant?.(props)
  }) as StyleFn
}

export function ifProp<V = any>(selector: PropSelector<V>, then: StyleFn, or?: StyleFn) {
  return variants<Props>(props => !!extractPropFromSelector(props, selector), {
    true: then,
    false: or,
  })
}

export function ifNotProp<V = any>(selector: PropSelector<V>, then: StyleFn) {
  return variants(props => !!extractPropFromSelector(props, selector), {
    false: then,
  })
}
