import { ReactText } from 'react'

// MARK: - Palette
const ColorPalette = {
  caribbeanGreen: '#00C5AC',
  black: '#000000',
  white: '#FFFFFF',
  baliHai: '#8DA2B9',
  pickledBluewood: '#2F4259',
  geyser: '#D4DCE6',
  lightGray: '#E9EEF5',
  bitterSweet: '#FD726D',
  jittaBlue: '#47C6F1',
  selectiveYellow: '#FFCF61'
}

const GradientPalette = {
  navigationGradient: {
    colors: ['#00D7BE', '#00C9F0'],
    locations: [0, 0.9933],
    angle: 270
  },

  jittaWealthGradient: {
    colors: ['#47C6F1', '#05D4BD'],
    locations: [0, 1],
    angle: 90,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  }
}

// MARK: - Interfaces
interface GradientCompatible {
  colors?: ReactText[]
  locations?: number[]
  angle?: number
}

// MARK: - Theme
const Theme = {
  colors: {
    titlePrimary: ColorPalette.jittaBlue,
    labelPrimary: ColorPalette.pickledBluewood,
    labelSecondary: ColorPalette.baliHai,
    labelTertiary: ColorPalette.geyser,
    labelPositive: ColorPalette.caribbeanGreen,
    labelNegative: ColorPalette.bitterSweet,
    textFieldPrimary: ColorPalette.jittaBlue,
    textFieldPositive: ColorPalette.caribbeanGreen,
    textFieldNegative: ColorPalette.bitterSweet,
    placeholder: ColorPalette.geyser,
    separatorPrimary: ColorPalette.geyser,
    separatorSecondary: ColorPalette.lightGray,
    tintPrimary: ColorPalette.pickledBluewood,
    tintPositive: ColorPalette.caribbeanGreen,
    tintNegative: ColorPalette.bitterSweet,
    backgroundPrimary: ColorPalette.white,
    backgroundSecondary: ColorPalette.white,
    backgroundTertiary: ColorPalette.white,
    buttonBackgroundPrimary: ColorPalette.jittaBlue,
    linkPrimary: ColorPalette.jittaBlue,
    cameraBackground: ColorPalette.black,
    cameraButton: ColorPalette.white,
  },

  gradients: {
    labelGradient: GradientPalette.jittaWealthGradient,
    buttonBackgroundGradientPrimary: GradientPalette.jittaWealthGradient,
    backgroundGradient: GradientPalette.jittaWealthGradient
  }
}

// MARK: - Color Schemes
enum ColorScheme {
  titlePrimary = 'titlePrimary',
  labelPrimary = 'labelPrimary',
  labelSecondary = 'labelSecondary',
  labelTertiary = 'labelTertiary',
  labelPositive = 'labelPositive',
  labelNegative = 'labelNegative',
  textFieldPrimary = 'textFieldPrimary',
  textFieldPositive = 'textFieldPositive',
  textFieldNegative = 'textFieldNegative',
  placeholder = 'placeholder',
  separatorPrimary = 'separatorPrimary',
  separatorSecondary = 'separatorSecondary',
  tintPrimary = 'tintPrimary',
  tintPositive = 'tintPositive',
  tintNegative = 'tintNegative',
  backgroundPrimary = 'backgroundPrimary',
  backgroundSecondary = 'backgroundSecondary',
  backgroundTertiary = 'backgroundTertiary',
  buttonBackgroundPrimary = 'buttonBackgroundPrimary',
  linkPrimary = 'linkPrimary',
  cameraBackground = 'cameraBackground',
  cameraButton = 'cameraButton',
}

enum GradientScheme {
  labelGradient = 'labelGradient',
  buttonBackgroundGradientPrimary = 'buttonBackgroundGradientPrimary',
  backgroundGradient = 'backgroundGradient'
}

// MARK: - Main
const Color = (scheme: ColorScheme): ReactText => {
  return Theme.colors[scheme]
}

Color.Palette = ColorPalette
Color.Scheme = ColorScheme

const Gradient = (scheme: GradientScheme): GradientCompatible => {
  return Theme.gradients[scheme]
}

Gradient.Palette = GradientPalette
Gradient.Scheme = GradientScheme

export { Color, Gradient }