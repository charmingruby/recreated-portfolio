import { projectsList } from '@/data/projectsList'
import { ProjectCard } from './project-card'

export function ProjectsList() {
  return (
    <div className="rounded-md ">
      <ProjectCard project={projectsList[0]} />
      <ProjectCard project={projectsList[1]} />
      <ProjectCard project={projectsList[2]} />
    </div>
  )
}
