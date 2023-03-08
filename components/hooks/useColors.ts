import { create } from 'zustand'

interface ColorStore {
  chosenColorIndex: number
  colors: {
    name: string
    primary: string
    secondary: string
  }[]
  setChosenColor: (index: number) => void
}

export const useColorsStore = create<ColorStore>((set) => ({
  chosenColorIndex: 0,
  colors: [{
    name: 'blue',
    primary: '#0077B6',
    secondary: '#03045E',
  },
  {
    name: 'red',
    primary: '#c1121f',
    secondary: '#780000',
  },
  {
    name: 'teal',
    primary: '#00a5cf',
    secondary: '#004e64',
  }
  ],
  setChosenColor: (index: number) => set((state) => ({ chosenColorIndex: index })),

}))