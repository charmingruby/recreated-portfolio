'use client'

import { navigationList } from '@/data/navigationList'
import { DrawerItem } from './drawer-item'
import { clsx } from 'clsx'

interface MobileDrawerProps {
  status: boolean
}

export function MobileDrawer({ status }: MobileDrawerProps) {
  return (
    <div
      className={clsx(
        'fixed z-[-99] mt-16 w-full border-b border-dark-lighten bg-dark-dark transition-transform md:hidden lg:absolute lg:hidden',
        {
          '-translate-y-44': !status,
        },
      )}
    >
      <ul className="flex flex-col space-y-2 py-2">
        {navigationList.map((navigationItem) => (
          <DrawerItem content={navigationItem} key={navigationItem} />
        ))}
      </ul>
    </div>
  )
}
