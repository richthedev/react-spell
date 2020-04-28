import Color from 'color'

const colors = {
  main: "#f9c80e",
  alt: "#dd7500",
  bg: "#662e9b",
  success: "#44c844",
}

export const settings = {
  ALREADY_GUESSED: 0,
  TIME_BETWEEN_WORDS: 1000,
}

export const difficulties = {
  HIDDEN: 0,
  MUTED: 1,
}

export const theme = {
  ...colors,
  bgLight: Color(colors.bg).lighten(0.2),
  borderWidth: 4,
}
