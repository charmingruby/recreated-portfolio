import { ReactNode } from 'react'
import * as Tecs from '../assets/icons/technologies'

export interface ISkill {
  name: string
  icon: ReactNode
}

export const frontEndSkills: ISkill[] = [
  { icon: <Tecs.NextIcon />, name: 'Next' },
  { icon: <Tecs.ReactIcon />, name: 'React' },
]

export const backEndSkills: ISkill[] = [
  { icon: <Tecs.NodeIcon />, name: 'Node' },
  {
    icon: <Tecs.NestIcon />,

    name: 'Nest',
  },
  {
    icon: <Tecs.ElixirIcon />,

    name: 'Elixir',
  },
  {
    icon: <Tecs.PhoenixIcon />,
    name: 'Phoenix',
  },
  {
    icon: <Tecs.GraphQLIcon />,
    name: 'GraphQL',
  },
  {
    icon: <Tecs.ExpressIcon />,
    name: 'Express',
  },
  {
    icon: <Tecs.FastifyIcon />,
    name: 'Fastify',
  },
  {
    icon: <Tecs.VitestIcon />,

    name: 'Vitest',
  },
  {
    icon: <Tecs.JestIcon />,

    name: 'Jest',
  },
  {
    icon: <Tecs.PrismaIcon />,

    name: 'Prisma',
  },
  {
    icon: <Tecs.DockerIcon />,

    name: 'Docker',
  },
]

export const stylingSkills: ISkill[] = [
  {
    icon: <Tecs.TailwindIcon />,

    name: 'TailwindCSS',
  },
  {
    icon: <Tecs.SassIcon />,

    name: 'Sass',
  },
  {
    icon: <Tecs.StyledComponentsIcon />,
    name: 'Styled Components',
  },
  {
    icon: <Tecs.CSSIcon />,

    name: 'CSS',
  },
]

export const mobileSkills: ISkill[] = [
  {
    icon: <Tecs.ReactIcon />,
    name: 'React Native',
  },
  {
    icon: <Tecs.ExpoIcon />,
    name: 'Expo',
  },
]
export const databaseSkills: ISkill[] = [
  { icon: <Tecs.PostgreIcon />, name: 'PostgreSQL' },
  { icon: <Tecs.MongoIcon />, name: 'MongoDB' },
  { icon: <Tecs.RedisIcon />, name: 'Redis' },
]

export const cloudSkills: ISkill[] = [
  {
    icon: <Tecs.AwsIcon />,
    name: 'AWS',
  },
]
