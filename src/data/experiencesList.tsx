interface IExperienceProjects {
  name: string
  url: string
}

export interface IExperience {
  role: string
  level: string
  description: string
  technologies: string[]
  projects: IExperienceProjects[]
  initalMonth: string
  finalMonth: string
  initialYear: number
  finalYear: number
}

export const experiencesList: IExperience[] = []
