import { create } from 'zustand'
import { Color, ColorRepresentation } from './types'


interface ColorStore {
  currentColor: Color
  colors: ColorRepresentation[]
  setCurrentColor: (color: Color) => void
}


export const useColorsStore = create<ColorStore>((set) => ({
  currentColor: Color.BLUE,
  colors: [
    {
      name: Color.BLUE,
      dark: '#001845',
      darker: '#011740',
      darkest: '#000f2b',
      light: '#002855',
      lighter: '#023e7d',
      lightest: '#0466c8',
      gradient: 'linear-gradient(90deg, #002855 0%, #023e7d 100%)',
    },
    {
      name: Color.RED,
      dark: '#4f000b',
      darker: '#3f0009',
      darkest: '#2f0006',
      light: '#a71e34',
      lighter: '#85182a',
      lightest: '#fae0e4',
      gradient: 'linear-gradient(90deg, #a71e34 0%, #85182a 100%)',
    },
    {
      name: Color.TEAL,
      dark: '#004e64',
      darker: '#003d4d',
      darkest: '#002a33',
      light: '#00a5cf',
      lighter: '#90e0ef',
      lightest: '#caf0f8',
      gradient: 'linear-gradient(90deg, #00a5cf 0%, #90e0ef 100%)',
          },
    {
      name: Color.DARK,
      dark: '#1a202c',
      darker: '#2d3748',
      darkest: '#4a5568',
      light: '#2d3748',
      lighter: '#4a5568',
      lightest: '#718096',
      gradient: 'linear-gradient(90deg, #2d3748 0%, #4a5568 100%)',
    },

  ],
  setCurrentColor  : (color: Color) => set((state) => ({ currentColor: color })),

}))