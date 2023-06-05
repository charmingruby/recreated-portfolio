import { MobileHeader } from './menu-handler'

export function Header() {
  return (
    <div className="bg-blur fixed z-50 flex h-16 w-full justify-center border-b border-dark-light opacity-80 backdrop-blur-lg">
      <MobileHeader />
    </div>
  )
}
