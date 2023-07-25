import { ReactNode } from 'react'
import * as Tecs from '../assets/icons/technologies'

export interface ISkill {
  name: string
  icon: ReactNode
  experienceTime: string
}

export const frontEndSkills: ISkill[] = [
  {
    icon: <Tecs.NextIcon />,
    name: 'Next',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.ReactIcon />,

    name: 'React',
    experienceTime: '2 year',
  },
]

export const backEndSkills: ISkill[] = [
  {
    icon: <Tecs.NodeIcon />,

    name: 'Node',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.NestIcon />,

    name: 'Nest',
    experienceTime: '4 months',
  },
  {
    icon: <Tecs.ElixirIcon />,

    name: 'Elixir',
    experienceTime: '1 month',
  },
  {
    icon: <Tecs.PhoenixIcon />,
    name: 'Phoenix',
    experienceTime: '1 month',
  },
  {
    icon: <Tecs.GraphQLIcon />,
    name: 'GraphQL',
    experienceTime: '5 month',
  },
  {
    icon: <Tecs.ExpressIcon />,
    name: 'Express',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.FastifyIcon />,
    name: 'Fastify',
    experienceTime: '2 months',
  },
  {
    icon: <Tecs.VitestIcon />,

    name: 'Vitest',
    experienceTime: '2 months',
  },
  {
    icon: <Tecs.JestIcon />,

    name: 'Jest',
    experienceTime: '4 months',
  },
  {
    icon: <Tecs.PrismaIcon />,

    name: 'Prisma',
    experienceTime: '9 months',
  },
  {
    icon: <Tecs.DockerIcon />,

    name: 'Docker',
    experienceTime: '1 year',
  },
]

export const stylingSkills: ISkill[] = [
  {
    icon: <Tecs.TailwindIcon />,

    name: 'TailwindCSS',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.SassIcon />,

    name: 'Sass',
    experienceTime: '2 years',
  },
  {
    icon: <Tecs.StyledComponentsIcon />,
    name: 'Styled Components',
    experienceTime: '2 years',
  },
  {
    icon: <Tecs.CSSIcon />,

    name: 'CSS',
    experienceTime: '2.5 years',
  },
]

export const mobileSkills: ISkill[] = [
  {
    icon: <Tecs.ReactIcon />,

    name: 'React Native',
    experienceTime: '5 months',
  },
  {
    icon: <Tecs.ExpoIcon />,
    name: 'Expo',
    experienceTime: '5 months',
  },
]

export const databaseSkills: ISkill[] = [
  {
    icon: <Tecs.PostgreIcon />,

    name: 'PostgreSQL',
    experienceTime: '1 year',
  },
  {
    icon: <Tecs.MongoIcon />,

    name: 'MongoDB',
    experienceTime: '1.5 year',
  },
  {
    icon: <Tecs.RedisIcon />,

    name: 'Redis',
    experienceTime: '6 months',
  },
]

export const cloudSkills: ISkill[] = [
  {
    icon: <Tecs.AwsIcon />,

    name: 'AWS',
    experienceTime: '1 month',
  },
]
