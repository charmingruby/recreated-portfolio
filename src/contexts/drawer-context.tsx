'use client'

import { PropsWithChildren, useState, createContext } from 'react'

interface DrawerContextType {
  isOpen: boolean
  toggleAction: () => void
}

export const DrawerContext = createContext({} as DrawerContextType)

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleAction = () => setIsOpen(!isOpen)

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        toggleAction,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
