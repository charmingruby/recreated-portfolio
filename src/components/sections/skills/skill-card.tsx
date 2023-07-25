import { ISkill } from '@/data/skillsList'

interface SkillCardProps {
  skill: ISkill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group flex w-full cursor-pointer flex-col gap-2 rounded-md border border-light-darker bg-dark-lighten px-3 py-2 text-base text-light-main transition-colors hover:border-solid hover:border-primary-main hover:bg-dark-light hover:text-primary-main">
      <div className="flex w-full items-center justify-between">
        <span className="font-alt text-lg">{skill.name}</span>
        <span>{skill.icon}</span>
      </div>
    </div>
  )
}
