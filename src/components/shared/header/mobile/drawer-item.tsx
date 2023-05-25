interface DrawerItemProps {
  content: string
}

export function DrawerItem({ content }: DrawerItemProps) {
  return (
    <li className="flex cursor-pointer items-center justify-center gap-2 font-alt text-base font-medium uppercase text-light-dark transition-colors hover:text-primary-main sm:px-2 sm:text-sm">
      <a href={content}>{content}</a>
    </li>
  )
}
