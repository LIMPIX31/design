import type { InterpolationPrimitive } from '@emotion/serialize'
import type { Theme } from '@emotion/react'
import type { Props } from './props'

export type StyleFn = (props: Props & { theme: Theme }) => InterpolationPrimitive
