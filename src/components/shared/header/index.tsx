import { DesktopHeader } from './desktop'
import { MobileHeader } from './mobile'

export function Header() {
  return (
    <div className="fixed z-50 flex h-16 w-full justify-center border-b border-dark-light bg-dark-main opacity-80">
      <DesktopHeader />
      <MobileHeader />
    </div>
  )
}
