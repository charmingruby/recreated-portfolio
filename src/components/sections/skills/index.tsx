import { SectionTitle } from '../../shared/section-title'
import {
  backEndSkills,
  cloudSkills,
  databaseSkills,
  frontEndSkills,
  mobileSkills,
  stylingSkills,
} from '@/data/skills'
import { SkillsDisclosure } from './skills-disclosure'

export function Skills() {
  return (
    <section className="space-y-4">
      <SectionTitle content="Tooling" />

      {/* Main Stack */}
      <div className="flex w-full flex-col gap-1.5 rounded-md border border-dark-light p-2">
        <SkillsDisclosure categoryName="Backend" skillsList={backEndSkills} />
        <SkillsDisclosure categoryName="Frontend" skillsList={frontEndSkills} />
        <SkillsDisclosure categoryName="Mobile" skillsList={mobileSkills} />
        <SkillsDisclosure categoryName="Styling" skillsList={stylingSkills} />
        <SkillsDisclosure categoryName="Database" skillsList={databaseSkills} />
        <SkillsDisclosure categoryName="Cloud" skillsList={cloudSkills} />
      </div>
    </section>
  )
}
