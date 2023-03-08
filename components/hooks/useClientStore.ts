import { create } from 'zustand'

interface ClientStore {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export const useClientStore = create<ClientStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isOpen: boolean) => set((state) => ({ isMenuOpen: isOpen })),
}))