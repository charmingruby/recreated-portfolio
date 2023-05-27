import { TechBadge } from '@/components/shared/tech-badge'
import { backEndSkills } from '@/utils/data/skillsList'
import { RedirectIcon, LinkIcon } from '@/assets/icons/usabilities'

export function ExperienceCard() {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex items-center gap-1 font-alt text-sm uppercase text-light-darker">
        <p>JULY</p>
        <div className="h-[2px] w-2 bg-light-darker" />
        <p>DEC</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xl font-medium text-light-main">
          <span>Node Developer</span>
          <div className="h-1 w-1 rounded-full bg-light-main" />
          <span>Intern</span>
          <RedirectIcon />
        </div>
        <div>
          <p className="leading-relaxed text-light-dark">
            minus quibusdam eaque ipsum excepturi, voluptatibus nihil quas
            obcaecati quos et reprehenderit quia tempora iusto quisquam maiores
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            inventore perferendis blanditiis dignissimos.
          </p>
        </div>

        <div className="mb-1 flex items-center gap-1 text-base">
          <LinkIcon />
          <span>Sloteam API</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {backEndSkills.map((skill) => (
            <TechBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
