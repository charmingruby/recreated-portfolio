import { SectionTitle } from '@/components/shared/section-title'
import { ExperienceCard } from './experience-card'

export function Experiences() {
  return (
    <section className="space-y-4" id="experiences">
      <SectionTitle title="working experience" subtitle="Career" />
      <div className="space-y-2 md:space-y-8">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  )
}
