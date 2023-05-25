import { MenuIcon } from '@/assets/icons/usabilities'

interface MenuButtonProps {
  onClick: () => void
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-light-dark transition-colors active:text-primary-main"
    >
      <MenuIcon size={28} />
    </button>
  )
}
