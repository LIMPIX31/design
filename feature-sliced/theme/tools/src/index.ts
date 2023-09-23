import { hsl, mix, parseToHsl, shade } from 'polished'

export class MasterPalette {
  static derive(accent: string) {
    return new MasterPalette(
      hsl({
        ...parseToHsl(shade(0.8, accent)),
        saturation: 0.05,
      }),
      hsl({
        ...parseToHsl(shade(0.8, accent)),
        saturation: 0.5,
      }),
    )
  }

  constructor(readonly dark: string, readonly light: string) {}

  color(color: string) {
    return new ColorPicker(this, color)
  }
}

export class ColorFactory {
  constructor(private readonly master: MasterPalette, readonly mode: 'dark' | 'light') {}

  color(color: string) {}
}

export class ColorPicker {
  constructor(private readonly master: MasterPalette, readonly mode: 'dark' | 'light', readonly color: string) {}

  shade(ratio: string) {
    return mix(ratio, this.color, this.m)
  }
}
