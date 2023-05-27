import { FolderIcon, ArrowRightIcon } from '@/assets/icons/usabilities'
import { TechBadge } from '@/components/shared/tech-badge'
import { databaseSkills } from '@/utils/data/skillsList'

export function ProjectCard() {
  return (
    <div className="group flex cursor-pointer gap-2">
      <div className="mt-1 flex flex-col items-center">
        <span className="rounded-full border border-dark-lighten p-1 text-dark-lighten transition-colors group-hover:border-primary-main group-hover:text-primary-main">
          <FolderIcon />
        </span>
        <div className="h-full w-px bg-dark-lighten transition-colors group-hover:bg-primary-main" />
      </div>

      <div className="rounded-md px-4 py-6 group-hover:bg-dark-light">
        <div className="mb-2 text-light-main">
          <h2 className="text-xl font-medium">Sloteam API</h2>
        </div>

        <div className="mb-2">
          <h2 className="leading-relaxed text-light-dark">
            Technologics projects management API, made using Node, Prisma,
            Redis, Postgre, Docker and JWT.
          </h2>
        </div>

        <ul className="mb-6 flex flex-wrap gap-2">
          {databaseSkills.map((skill) => (
            <TechBadge key={skill.name} name={skill.name} />
          ))}
        </ul>

        <div className="flex items-center text-primary-main">
          <span className="flex items-center gap-1 rounded-full">
            View details
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  )
}
