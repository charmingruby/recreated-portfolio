import { Button } from '@/components/shared/button'
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
      <Button>
        <span className="font-medium">Get in touch</span>
        <ArrowRightIcon className="text-sm" />
      </Button>

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
