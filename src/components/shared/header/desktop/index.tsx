import Image from 'next/image'
import Logo from '../../../../assets/images/logo.svg'
import { Nav } from './nav'

export function DesktopHeader() {
  return (
    <header className="mx-auto hidden h-16 w-full items-center justify-between px-4 sm:px-8 md:mx-auto md:flex md:max-w-screen-xl">
      <Image src={Logo} alt="Logo image" width={32} height={32} />
      <Nav />
    </header>
  )
}
