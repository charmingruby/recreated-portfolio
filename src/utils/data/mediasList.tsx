import {
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from '@/assets/icons/usabilities'

import { ReactNode } from 'react'

interface IMedia {
  name: string
  url: string
  icon: ReactNode
}

const iconStyles =
  'text-light-darker transition-colors group-hover:text-primary-main'

export const mediasList: IMedia[] = [
  {
    name: 'Github',
    icon: <GithubIcon className={iconStyles} />,
    url: 'https://github.com/charmingruby',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon className={iconStyles} />,
    url: 'https://www.instagram.com/gustavodiasa/',
  },
  {
    name: 'Linkedin',
    icon: <LinkedinIcon className={iconStyles} />,
    url: 'https://www.linkedin.com/in/gustavo-dias21/',
  },
]
