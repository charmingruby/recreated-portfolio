import { DrawerContext } from "@/contexts/drawer-context"
import { useContext } from "react"

interface DrawerItemProps {
  content: string
}

export function DrawerItem({ content }: DrawerItemProps) {
  const {isOpen,toggleAction} = useContext(DrawerContext)
  
  return (
    <li
      onClick={toggleAction}
      className="flex cursor-pointer items-center justify-center gap-2 font-alt text-base font-medium uppercase text-light-dark transition-colors hover:text-primary-main sm:px-2 sm:text-sm md:text-lg"
    >
      <a href={`#${content}`}>{content}</a>
    </li>
  )
}
