import Image from 'next/image'
import Logo from '../../assets/images/logo.svg'

import { DownloadIcon } from '@/utils/icons/usabilities'

export function Header() {
  const navigationOptions = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <header className="fixed z-10 flex h-16 w-full items-center justify-between border-b border-dark-light bg-dark-main px-8 md:px-32">
      <Image src={Logo} alt="Logo image" width={32} height={32} />

      <div className="flex items-center gap-4">
        {/* Navigation */}
        <nav className="">
          <ul className="flex gap-3">
            {navigationOptions.map((navigationOption) => (
              <li
                key={navigationOption}
                className="flex items-center gap-2 text-sm font-bold uppercase"
              >
                {navigationOption}
              </li>
            ))}
          </ul>
        </nav>

        <button className="flex gap-2 rounded-md border border-primary-main px-3 py-2 text-primary-main">
          Resume
          <DownloadIcon />
        </button>
      </div>
    </header>
  )
}
