import Image from 'next/image'
import Logo from '../../../assets/images/logo.svg'

import { DownloadIcon } from '@/utils/icons/usabilities'
import { Button } from '../button'

export function Header() {
  const navigationOptions = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <div className="fixed z-50 flex h-16 w-full justify-center border-b border-dark-light bg-dark-main">
      <header className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-8 lg:mx-auto lg:max-w-screen-xl">
        <Image src={Logo} alt="Logo image" width={32} height={32} />

        <ul className="flex">
          {navigationOptions.map((navigationOption) => (
            <li
              key={navigationOption}
              className="flex cursor-pointer items-center gap-2 text-xs font-bold uppercase text-light-dark transition-colors hover:text-primary-main sm:px-2 sm:text-sm"
            >
              {navigationOption}
            </li>
          ))}
          {/* Resume Downloaded */}
          <Button>
            <span className="font-medium">Resume</span>
            <DownloadIcon className="text-sm" />
          </Button>
        </ul>
      </header>
    </div>
  )
}
