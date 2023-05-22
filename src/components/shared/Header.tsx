import Image from 'next/image'
import Logo from '../../assets/images/logo.svg'

import { DownloadIcon } from '@/utils/icons/usabilities'
import { LanguageSelection } from './LanguageSelection'

export function Header() {
  return (
    <header className="z-10 flex h-16 w-full items-center justify-between border-b border-dark-light bg-dark-main px-4 lg:mx-auto lg:max-w-screen-xl lg:px-0">
      <Image src={Logo} alt="Logo image" width={32} height={32} />

      <div className="flex items-center gap-4">
        {/* Language Selection */}
        <LanguageSelection />

        {/* Resume Downloaded */}
        <button className="group flex items-center gap-1 rounded-full border border-primary-main bg-dark-main px-3 py-1 leading-relaxed text-primary-main transition-colors hover:bg-primary-main hover:text-dark-main">
          <span className="font-medium">Resume</span>
          <DownloadIcon className="text-sm" />
        </button>
      </div>
    </header>
  )
}
