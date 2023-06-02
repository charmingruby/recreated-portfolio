import { TechBadge } from '@/components/shared/tech-badge'
import { RedirectIcon, LinkIcon } from '@/assets/icons/usabilities'
import { IExperience } from '@/data/experiencesList'

interface ExperienceCardProps {
  experience: IExperience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group flex cursor-pointer flex-col items-start gap-2 rounded-md sm:flex-row">
      {/* Work time */}
      <div className="mt-6 flex w-28 items-center gap-1 font-alt text-sm uppercase text-light-darker transition-colors group-hover:text-light-main">
        <p className="uppercase">{experience.initialTime}</p>
        <div className="h-[2px] w-2 bg-light-darker transition-colors group-hover:bg-light-main" />
        <p className="sm:w-24">{experience.finishTime}</p>
      </div>
      <div className="flex flex-col gap-2 rounded-md px-2 py-6 transition-colors group-hover:bg-dark-light sm:px-4">
        {/* Title */}
        <div className="flex flex-col text-xl font-medium text-light-main transition-colors group-hover:text-primary-main sm:flex-row sm:items-center sm:gap-1.5">
          <span className="leading-tight sm:leading-normal">
            {experience.role}
          </span>
          <span className="hidden sm:flex">·</span>
          <span className="text-lg leading-tight text-light-dark transition-colors group-hover:text-primary-main sm:leading-normal sm:text-light-main">
            {experience.level}
          </span>
          <RedirectIcon className="hidden transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:flex" />
        </div>

        {/* Description */}
        <div>
          <p className="leading-relaxed text-light-dark">
            minus quibusdam eaque ipsum excepturi, voluptatibus nihil quas
            obcaecati quos et reprehenderit quia tempora iusto quisquam maiores
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            inventore perferendis blanditiis dignissimos.
          </p>
        </div>

        {/* Projects developed */}
        {experience.projects.length > 0 && (
          <div>
            {experience.projects.map((project) => (
              <div
                className="mb-1 flex items-center gap-1 text-base"
                key={project.url}
              >
                <LinkIcon />
                <span>Sloteam API</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((skill) => (
            <TechBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
