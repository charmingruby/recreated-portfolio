export function ContentHeader() {
  const navigationOptions = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="flex h-12 w-full items-center rounded-full border border-dark-light px-6 md:h-16">
      <ul className="flex w-full justify-between gap-3">
        {navigationOptions.map((navigationOption) => (
          <li
            key={navigationOption}
            className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-2 text-xs font-bold uppercase text-light-darker transition-colors hover:bg-dark-light hover:text-light-main sm:px-2 sm:text-sm"
          >
            {navigationOption}
          </li>
        ))}
      </ul>
    </nav>
  )
}
