export enum Color {
  DARK = 'dark',
  BLUE = 'blue',
  RED = 'red',
  TEAL = 'teal',
}

export interface ColorRepresentation {
  name: string,
  hoverClass: string,
  textClass: string,
  lightBgClass: string,
  darkBgClass: string,
  topBorderClass: string,
}
