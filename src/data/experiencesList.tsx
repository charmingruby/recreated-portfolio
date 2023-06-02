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
    description: '',
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
    description: '',
    role: 'Developer',
    technologies: ['React Native', 'Node', 'UI/UX'],
    projects: [],
    initialTime: 'JAN',
    finishTime: 'DEC 2022',
  },
  {
    company: 'UFJF',
    level: 'Professional Training',
    description: '',
    role: 'Developer',
    technologies: ['java'],
    projects: [],
    initialTime: 'JAN',
    finishTime: 'JUN 2023',
  },
]
