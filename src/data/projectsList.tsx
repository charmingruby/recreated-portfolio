export interface IProject {
  title: string
  description: string[]
  technologies: string[]
  repoUrl: string
  demoUrl?: string
}

export const projectsList: IProject[] = [
  {
    title: 'Recreated Portfolio',
    description: ['Newest portfolio to show my trajectory as a developer.'],
    technologies: ['Next', 'React', 'Tailwind', 'Headless UI', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/recreated-portfolio.git',
    demoUrl: '',
  },
  {
    title: 'Trinket Gym API',
    description: [
      'Gym pass API all tested to deal with online check-in looking by Geolocalization.',
    ],
    technologies: [
      'Node',
      'Prisma',
      'Vitest',
      'Fastify',
      'Zod',
      'JWT',
      'Geolocalization',
      'PostgreSQL',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/charmingruby/recreated-portfolio.git',
    demoUrl: '',
  },
  {
    title: 'Sloteam API',
    description: [
      'Projects management API made to deal with teams inside a project.',
    ],
    technologies: [
      'Node',
      'Prisma',
      'JWT',
      'Redis',
      'PostgreSQL',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/charmingruby/recreated-portfolio.git',
    demoUrl: '',
  },
  {
    title: 'Ymir App (Under development)',
    description: [
      'Software development assistent application to help the organization and development of system.',
    ],
    technologies: [
      'Next',
      'TailwindCSS',
      'Redux Zustand',
      'HeadlessUI',
      'Zod',
      'React-Hook-Form',
      'Node',
      'Prisma',
      'Fastify',
      'PostgreSQL',
      'Vitest',
      'JWT',
    ],
    repoUrl: 'https://github.com/charmingruby/ymir',
    demoUrl: '',
  },
  {
    title: 'Ignite Call (Under development)',
    description: ['Appointments management app.'],
    technologies: ['Next', 'React', 'Next-Auth', 'Prisma', 'Zod', 'PostgreSQL'],
    repoUrl: 'https://github.com/charmingruby/ignite-call',
    demoUrl: '',
  },
  {
    title: 'Ganking API (Under development)',
    description: ['Bank API.'],
    technologies: ['Elixir', 'Phoenix', 'Ecto', 'PostgreSQL', 'Tests'],
    repoUrl: 'https://github.com/charmingruby/ganking-api',
    demoUrl: '',
  },
  {
    title: 'Rockelivery API (Under development)',
    description: ['Delivery API.'],
    technologies: ['Elixir', 'Phoenix', 'Ecto', 'PostgreSQL', 'Tests'],
    repoUrl: 'https://github.com/charmingruby/rockelivery-api',
    demoUrl: '',
  },
  {
    title: 'Rent a RC Car API (Under development)',
    description: ['Car rental API.'],
    technologies: ['Node', 'Jest', 'PostgreSQL', 'TypeORM', 'Express'],
    repoUrl: 'https://github.com/charmingruby/rent-a-rc-car-api',
    demoUrl: '',
  },
  {
    title: 'Blank Space API (Under development)',
    description: ['Forum API, made to pratice DDD and Clean Architecture.'],
    technologies: [
      'Nest',
      'Node',
      'Vitest',
      'PostgreSQL',
      'Zod',
      'GraphQL',
      'Prisma',
      'Fastify',
    ],
    repoUrl: 'https://github.com/charmingruby/blank-space-api',
    demoUrl: '',
  },
  {
    title: 'Toss a Coin API',
    description: ['Transactions management API'],
    technologies: ['Node', 'Vitest', 'Knex', 'SQLite', 'Zod', 'Fastify'],
    repoUrl: 'https://github.com/charmingruby/toss-a-coin-api',
    demoUrl: '',
  },
  {
    title: 'Ignite Design System',
    description: ['Design System made for a RocketSeat project.'],
    technologies: ['React', 'Stitches', 'Storybook'],
    repoUrl: 'https://github.com/charmingruby/ignite-design-system',
    demoUrl: '',
  },
  {
    title: 'NLW Spacetime',
    description: ['Time Capsule app.'],
    technologies: [
      'Next',
      'TailwindCSS',
      'Prisma',
      'Node',
      'Fastify',
      'PostgreSQL',
      'Expo',
    ],
    repoUrl: 'https://github.com/charmingruby/nlw-spacetime',
    demoUrl: '',
  },
  {
    title: 'Ignite Teams',
    description: ['Mobile app made for teams disputes management'],
    technologies: ['React Native', 'Styled Components', 'Async Storage'],
    repoUrl: 'https://github.com/charmingruby/ignite-teams',
    demoUrl: '',
  },
  {
    title: 'Pomo on Nite',
    description: ['Pomodoro app.'],
    technologies: ['React', 'React-Hook-Form', 'Zod', 'Styled Components'],
    repoUrl: 'https://github.com/charmingruby/pomo-on-nite',
    demoUrl: '',
  },
  {
    title: 'Goney Money',
    description: ['Finances dashboard looking for API consume performance'],
    technologies: ['React', 'Styled Components'],
    repoUrl: 'https://github.com/charmingruby/goney-money',
    demoUrl: '',
  },
  {
    title: 'Marketify',
    description: ['Accessories shop'],
    technologies: ['Next', 'TailwindCSS', 'Stripes'],
    repoUrl: 'https://github.com/charmingruby/marketify',
    demoUrl: '',
  },
]
/*

    {
        title: '',
        description: [],
        technologies: [],
        repoUrl: '',
        demoUrl: '',
    },
*/
