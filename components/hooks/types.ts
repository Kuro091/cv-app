export enum Color {
  DARK = 'dark',
  BLUE = 'blue',
  RED = 'red',
  TEAL = 'teal',
}

export interface ColorRepresentation {
  name: string,
  dark: string,
  darker: string,
  darkest: string,
  light: string,
  lighter: string,
  lightest: string,
  gradient: string,
}
