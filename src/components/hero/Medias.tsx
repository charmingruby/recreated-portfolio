import {
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  ArrowRightIcon,
} from '@/utils/icons/usabilities'

import { ReactNode } from 'react'

interface IMedia {
  url: string
  icon: ReactNode
}

const iconStyles =
  'text-[20px] text-light-darker transition-colors group-hover:text-light-main'

export function Medias() {
  const mediasList: IMedia[] = [
    {
      icon: <GithubIcon className={iconStyles} />,
      url: 'https://github.com/charmingruby',
    },
    {
      icon: <InstagramIcon className={iconStyles} />,
      url: 'https://www.instagram.com/gustavodiasa/',
    },
    {
      icon: <LinkedinIcon className={iconStyles} />,
      url: 'https://www.linkedin.com/in/gustavo-dias21/',
    },
  ]

  return (
    <div className="flex items-center gap-4">
      <a href="">
        <button className="group flex items-center gap-1 rounded-full border border-primary-main bg-dark-main px-3 py-1 leading-relaxed text-primary-main transition-colors hover:bg-primary-main hover:text-dark-main">
          <span className="font-medium">Get in touch</span>
          <ArrowRightIcon className="text-sm" />
        </button>
      </a>

      <div className="flex gap-2">
        {mediasList.map((media) => (
          <a href="" className="" key={media.url}>
            <button className="group flex items-center rounded-full p-2 transition-colors hover:bg-dark-light">
              {media.icon}
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}
