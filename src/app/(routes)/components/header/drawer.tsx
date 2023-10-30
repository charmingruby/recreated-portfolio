'use client'

import { useContext, useState } from 'react'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import { MenuButton } from './menu-button'
import { navigationList } from '@/data/navigationList'
import clsx from 'clsx'
import { DrawerItem } from './drawer-item'
import { DrawerContext } from '@/contexts/drawer-context'

export function Drawer() {
  const {isOpen,toggleAction} = useContext(DrawerContext)

  return (
    <>
      <header className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4 sm:px-8">
        <Image src={Logo} alt="Logo image" width={32} height={32} />
        <MenuButton onClick={toggleAction} />
      </header>
      <div
        className={clsx(
          'fixed z-[-99] mt-16 w-full border-b border-dark-lighten bg-dark-dark transition-transform',
          {
            '-translate-y-64': !isOpen,
          },
        )}
      >
        <ul className="flex flex-col space-y-2 py-2">
          {navigationList.map((navigationItem) => (
            <DrawerItem
              content={navigationItem}
              key={navigationItem}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
