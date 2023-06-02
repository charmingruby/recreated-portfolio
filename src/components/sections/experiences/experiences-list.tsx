import { experiencesList } from '@/data/experiencesList'
import { ExperienceCard } from './experience-card'

export function ExperiencesList() {
  return (
    <div className="space-y-2 md:space-y-8">
      {experiencesList.map((experience) => (
        <ExperienceCard experience={experience} key={experience.description} />
      ))}
    </div>
  )
}
