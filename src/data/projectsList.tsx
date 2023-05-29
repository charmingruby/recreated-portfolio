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
