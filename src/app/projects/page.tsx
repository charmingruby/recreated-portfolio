import { CaretIcon } from '@/assets/icons/usabilities'
import { ProjectCard } from '@/components/sections/projects/project-card'
import { SectionTitle } from '@/components/shared/section-title'
import { projectsList } from '@/data/projectsList'
import Link from 'next/link'

export default function Projects() {
  return (
    <div>
      <Link
        href="/"
        className="mb-2 flex w-24 cursor-pointer items-center text-sm text-light-dark transition-colors hover:text-light-main"
      >
        <CaretIcon className="-rotate-90" />
        <span>Go back</span>
      </Link>

      <SectionTitle title="All projects" />

      <div className="mt-4">
        {projectsList.map((item) => (
          <ProjectCard key={item.repoUrl} project={item} />
        ))}
      </div>
    </div>
  )
}
