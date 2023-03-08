import { create } from 'zustand'
import { Color, ColorRepresentation } from './types'


interface ColorStore {
  currentColor: Color
  colors: ColorRepresentation[]
  setCurrentColor: (color: Color) => void
}


export const useColorsStore = create<ColorStore>((set) => ({
  currentColor: Color.DARK,
  colors: [
    {
      name: Color.BLUE,
      hoverClass: `hover:bg-[#03045E] hover:text-white text-[#0077B6]`,
      textClass: `text-[#0077B6]`,
      lightBgClass: `bg-[#023e8a]`,
      darkBgClass: 'bg-[#03045e]',
      topBorderClass: `border-t-2 border-t-[#ade8f4]`,
    },
    {
      name: Color.RED,
      hoverClass: `hover:bg-[#780000] hover:text-white text-[#c1121f]`,
      textClass: `text-[#c1121f]`,
      lightBgClass: `bg-[#6a040f]`,
      darkBgClass: 'bg-[#370617]',
      topBorderClass: `border-t-2 border-t-[#f25c54]`,
    },
    {
      name: Color.TEAL,
      hoverClass: `hover:bg-[#004e64] hover:text-white text-[#00a5cf]`,
      textClass: `text-[#00a5cf]`,
      lightBgClass: `bg-[#037971]`,
      darkBgClass: 'bg-[#023436]',
      topBorderClass: `border-t-2 border-t-[#049a8f]`,

    },
    {
      name: Color.DARK,
      hoverClass: `hover:bg-[#1a202c] hover:text-white text-[#2d3748]`,
      textClass: `text-[#2d3748]`,
      lightBgClass: `bg-[#2d3748]`,
      darkBgClass: 'bg-[#1a202c]',
      topBorderClass: `border-t-2 border-t-[#2d3748]`,
    },

  ],
  setCurrentColor  : (color: Color) => set((state) => ({ currentColor: color })),

}))