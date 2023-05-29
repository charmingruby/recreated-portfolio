import { navigationList } from '@/data/navigationList'
import { DownloadResumeButton } from './download-resume-button'

export function Nav() {
  return (
    <nav>
      <ul className="flex">
        {navigationList.map((navigationItem) => (
          <li
            key={navigationItem}
            className="flex cursor-pointer items-center gap-2 font-alt text-xs font-medium uppercase text-light-dark transition-colors hover:text-primary-main sm:px-2 sm:text-sm"
          >
            <a href={`#${navigationItem}`}>{navigationItem}</a>
          </li>
        ))}
        <DownloadResumeButton />
      </ul>
    </nav>
  )
}
