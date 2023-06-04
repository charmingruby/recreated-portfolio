interface IExperienceProjects {
  name: string
  url: string
}

export interface IExperience {
  company: string // UFJF
  role: string // Backend Node
  level: string
  description: string // lorem...
  technologies: string[]
  projects: IExperienceProjects[]
  initialTime: string
  finishTime: string
}

export const experiencesList: IExperience[] = [
  {
    company: 'Code Jr.',
    level: 'Projects Assistant',
    description: `Developed an E-commerce, and maintained customer's websites.`,
    role: 'Front End',
    technologies: [
      'javascript',
      'typescript',
      'react',
      'php',
      'html',
      'css',
      'mysql',
    ],
    projects: [],
    initialTime: '2021',
    finishTime: '2022',
  },
  {
    company: 'UFJF',
    level: 'Professional Training',
    description:
      'Developed a teleconsultation application for remote medical care of patients with no financial conditions.',
    role: 'Developer',
    technologies: ['React Native', 'Node', 'UI/UX'],
    projects: [],
    initialTime: 'JAN',
    finishTime: 'DEC 2022',
  },
  {
    company: 'UFJF',
    level: 'Professional Training',
    description: `Developed a project that analyzes developer's skills by the commits on Github.`,
    role: 'Developer',
    technologies: ['java'],
    projects: [],
    initialTime: 'JAN',
    finishTime: 'JUN 2023',
  },
]
