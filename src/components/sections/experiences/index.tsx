import { SectionTitle } from '@/components/shared/section-title'
import { ExperienceCard } from './experience-card'

export function Experiences() {
  return (
    <section className="space-y-4">
      <SectionTitle title="working experience" subtitle="Career" />
      <div>
        <ExperienceCard />
      </div>
    </section>
  )
}
