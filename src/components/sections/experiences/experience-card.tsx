import { TechBadge } from '@/components/shared/tech-badge'
import { backEndSkills } from '@/data/skillsList'
import { RedirectIcon, LinkIcon } from '@/assets/icons/usabilities'

export function ExperienceCard() {
  return (
    <div className="group flex cursor-pointer flex-col items-start gap-2 px-2 py-4 transition-colors hover:bg-dark-light sm:flex-row sm:px-4 sm:py-6 md:gap-4">
      {/* Work time */}
      <div className="mt-1 flex items-center gap-1 font-alt text-sm uppercase text-light-darker">
        <p>JULY</p>
        <div className="h-[2px] w-2 bg-light-darker" />
        <p>DEC</p>
      </div>
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex flex-col text-xl font-medium text-light-main transition-colors group-hover:text-primary-main sm:flex-row sm:items-center sm:gap-1.5">
          <span className="leading-tight sm:leading-normal">
            Node Developer
          </span>
          <div className="hidden h-1 w-1 rounded-full bg-light-main transition-colors group-hover:bg-primary-main sm:flex" />

          <span className="text-lg leading-tight text-light-dark transition-colors group-hover:text-primary-main sm:leading-normal sm:text-light-main">
            Intern
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
        <div className="mb-1 flex items-center gap-1 text-base">
          <LinkIcon />
          <span>Sloteam API</span>
        </div>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2">
          {backEndSkills.map((skill) => (
            <TechBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
