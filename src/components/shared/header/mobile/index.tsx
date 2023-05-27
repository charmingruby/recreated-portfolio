'use client'

import { useState } from 'react'
import Logo from '../../../../assets/images/logo.svg'
import Image from 'next/image'
import { MobileDrawer } from './drawer'
import { MenuButton } from './menu-button'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="mx-auto flex h-16 w-full items-center justify-between border-b border-dark-light bg-dark-main px-4 sm:px-8 md:hidden">
        <Image src={Logo} alt="Logo image" width={32} height={32} />
        <MenuButton onClick={handleMenuToggle} />
      </header>
      <MobileDrawer status={isMenuOpen} />
    </>
  )
}
