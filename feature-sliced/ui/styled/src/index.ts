import { useTheme as useEmotionTheme } from '@emotion/react'

import * as EmotionStyled from '@emotion/styled'
export { EmotionStyled }
export * from '@emotion/styled'

import * as EmotionReact from '@emotion/react'
export { EmotionReact }
export * from '@emotion/react'

export { cx } from '@emotion/css'

import * as StyledSystem from 'styled-system'
export { StyledSystem }
export * from 'styled-system'

export type { Theme as StyledTheme } from 'styled-system'

import type { Theme } from './theme.js'
export type { Theme }
export * from './combine.js'
export * from './prop-tools.js'
export * from './style-fn.js'

export {
  rgba,
  hsl,
  em,
  mix,
  rgb,
  rem,
  remToPx,
  adjustHue,
  setHue,
  animation,
  readableColor,
  between,
  cssVar,
  darken,
  desaturate,
  easeIn,
  easeOut,
  easeInOut,
  hsla,
  hslToColorString,
  parseToHsl,
  parseToRgb,
  opacify,
  tint,
  shade,
  transitions,
  transparentize,
  timingFunctions,
  toColorString,
  rgbToColorString,
  stripUnit,
  setSaturation,
  setLightness,
  lighten,
  linearGradient,
  radialGradient,
  clearFix,
  important,
  invert,
  normalize,
  grayscale,
  getLuminance,
  getContrast,
  complement,
  fluidRange,
  fontFace,
  saturate,
  math
} from 'polished'

import * as Polished from 'polished'
export { Polished }

export { default as styled } from '@emotion/styled'

export function useTheme<T = Theme>() {
  return useEmotionTheme() as T
}

export type { Props } from './props.js'
