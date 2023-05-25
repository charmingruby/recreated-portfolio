import Image from 'next/image'
import Logo from '../../../../assets/images/logo.svg'
import { navigationList } from '@/utils/data/navigationList'

import { DownloadIcon } from '@/assets/icons/usabilities'
import { Button } from '../../button'

export function DesktopHeader() {
  return (
    <header className="mx-auto hidden h-16 w-full items-center justify-between px-4 sm:px-8 lg:mx-auto lg:flex lg:max-w-screen-xl">
      <Image src={Logo} alt="Logo image" width={32} height={32} />

      <nav>
        <ul className="flex">
          {navigationList.map((navigationItem) => (
            <li
              key={navigationItem}
              className="flex cursor-pointer items-center gap-2 font-alt text-xs font-medium uppercase text-light-dark transition-colors hover:text-primary-main sm:px-2 sm:text-sm"
            >
              {navigationItem}
            </li>
          ))}
          {/* Resume Downloaded */}
          <Button className="ml-2">
            <span className="mr-1 text-sm font-medium">Resume</span>
            <DownloadIcon className="text-sm" />
          </Button>
        </ul>
      </nav>
    </header>
  )
}
