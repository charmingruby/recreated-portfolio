import { ISkill } from '@/data/skills'
import { FilledCalendarIcon } from '@/utils/icons/usabilities'

interface SkillCardProps {
  skill: ISkill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group flex w-full cursor-pointer flex-col gap-2 rounded-md border border-dashed border-dark-light px-3 py-2 text-base transition-colors hover:border-solid hover:border-primary-main hover:bg-dark-light hover:text-primary-main">
      <div className="flex w-full justify-between">
        <span className="font-alt text-lg">{skill.name}</span>
        <span className="rounded-md border border-dashed border-dark-light p-1 group-hover:border-solid group-hover:border-primary-main">
          {skill.icon}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FilledCalendarIcon className="" size={12} />
        <span className="sm:hidden">{skill.experienceTime}</span>
        <span className="hidden sm:block">
          {skill.experienceTime} of experience.
        </span>
      </div>
    </div>
  )
}
