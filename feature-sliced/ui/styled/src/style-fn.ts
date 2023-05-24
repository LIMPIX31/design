import type { InterpolationPrimitive } from '@emotion/serialize'
import type { Theme } from '@emotion/react'

export type StyleFn<T = {}> = (props: { theme: Theme } & T) => InterpolationPrimitive
