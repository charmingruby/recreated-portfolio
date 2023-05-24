import { ReactNode } from 'react'
import * as Tecs from '../utils/icons/technologies'

export interface ISkill {
  name: string
  icon: ReactNode
  hex: string
  experienceTime: string
}

export const frontEndSkills: ISkill[] = [
  {
    icon: <Tecs.NextIcon />,
    hex: '#ddd',
    name: 'Next',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.ReactIcon />,
    hex: '#61DBFB',
    name: 'React',
    experienceTime: '2 year',
  },
]

export const backEndSkills: ISkill[] = [
  {
    icon: <Tecs.NodeIcon />,
    hex: '#66cc33',
    name: 'Node',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.NestIcon />,
    hex: '#E0234E',
    name: 'Nest',
    experienceTime: '4 months',
  },
  {
    icon: <Tecs.ExpressIcon />,
    hex: '#ddd',
    name: 'Express',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.FastifyIcon />,
    hex: '#ddd',
    name: 'Fastify',
    experienceTime: '2 months',
  },
  {
    icon: <Tecs.JestIcon />,
    hex: '#853957',
    name: 'Jest',
    experienceTime: '4 months',
  },
  {
    icon: <Tecs.PrismaIcon />,
    hex: '#16A394',
    name: 'Prisma',
    experienceTime: '9 months',
  },
  {
    icon: <Tecs.DockerIcon />,
    hex: '#0db7ed',
    name: 'Docker',
    experienceTime: '1 year',
  },
]

export const stylingSkills: ISkill[] = [
  {
    icon: <Tecs.TailwindIcon />,
    hex: '#0bb6d4',
    name: 'TailwindCSS',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.SassIcon />,
    hex: '#cd6799',
    name: 'Sass',
    experienceTime: '2 years',
  },
  {
    icon: <Tecs.StyledComponentsIcon />,
    hex: '#ddd',
    name: 'Styled Components',
    experienceTime: '2 years',
  },
  {
    icon: <Tecs.CSSIcon />,
    hex: '#379AD6',
    name: 'CSS',
    experienceTime: '2.5 years',
  },
]

export const mobileSkills: ISkill[] = [
  {
    icon: <Tecs.ReactIcon />,
    hex: '#61DBFB',
    name: 'React Native',
    experienceTime: '5 months',
  },
  {
    icon: <Tecs.ExpoIcon />,
    hex: '#ddd',
    name: 'Expo',
    experienceTime: '5 months',
  },
]

export const databaseSkills: ISkill[] = [
  {
    icon: <Tecs.PostgreIcon />,
    hex: '#007acc',
    name: 'PostgreSQL',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.MongoIcon />,
    hex: '#4DB33D',
    name: 'MongoDB',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.RedisIcon />,
    hex: '#D9281A',
    name: 'Redis',
    experienceTime: '6 months',
  },
]

export const cloudSkills: ISkill[] = [
  {
    icon: <Tecs.AwsIcon />,
    hex: '#FF9900',
    name: 'AWS',
    experienceTime: '1 month',
  },
]
