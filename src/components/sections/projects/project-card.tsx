import { FolderIcon, ArrowRightIcon } from '@/assets/icons/usabilities'
import { TechBadge } from '@/components/shared/tech-badge'
import { IProject } from '@/data/projectsList'

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex cursor-pointer gap-1 sm:gap-2">
      <div className="mt-1 flex flex-col items-center">
        <span className="rounded-full border border-light-darker p-1 text-light-darker transition-colors group-hover:border-primary-main group-hover:text-primary-main">
          <FolderIcon />
        </span>
        <div className="h-full w-px bg-light-darker transition-colors group-hover:bg-primary-main" />
      </div>

      <div className="rounded-md px-2 py-6 group-hover:bg-dark-light sm:px-4">
        <div className="mb-2 text-light-main">
          <h2 className="text-xl font-medium">{project.title}</h2>
        </div>

        <div className="mb-2">
          <h2 className="leading-relaxed text-light-dark">
            {project.description[0]}
          </h2>
        </div>

        <ul className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology, index) => (
            <TechBadge key={technology} name={technology} />
          ))}
        </ul>

        <div className="flex items-center text-primary-main">
          <a href={project.repoUrl}>
            <span className="flex items-center gap-1 rounded-full transition-colors hover:text-primary-light">
              View repository
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
