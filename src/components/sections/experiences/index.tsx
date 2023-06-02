import { SectionTitle } from '@/components/shared/section-title'
import { ExperiencesList } from './experiences-list'

export function Experiences() {
  return (
    <section className="space-y-4" id="experiences">
      <SectionTitle title="working experience" subtitle="Career" />
      <ExperiencesList />
    </section>
  )
}
