import {
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  ArrowRightIcon,
} from '@/utils/icons/usabilities'

import { ReactNode } from 'react'
import { Button } from '../shared/Button'

interface IMedia {
  url: string
  icon: ReactNode
}

const iconStyles = 'text-[20px] text-light-darker'

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
    <div className="flex items-center gap-6">
      <a href="">
        <button className="flex items-center gap-1 rounded-md border border-primary-main px-3 py-1 leading-relaxed text-primary-main">
          <span className="font-medium">Get in touch</span>
          <ArrowRightIcon className="text-sm" />
        </button>
      </a>

      <Button />

      <div className="flex gap-4">
        {mediasList.map((media) => (
          <a href="" className="" key={media.url}>
            <button className="flex items-center">{media.icon}</button>
          </a>
        ))}
      </div>
    </div>
  )
}
