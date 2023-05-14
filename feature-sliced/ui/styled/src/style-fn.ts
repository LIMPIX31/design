import type { InterpolationPrimitive } from '@emotion/serialize'
import type { Theme } from '@emotion/react'

export type StyleFn<T = {}> = (props: (Record<any, any> | { theme: Theme }) & T) => InterpolationPrimitive
