import { Button } from '@/components/shared/button'
import { SectionTitle } from '../../shared/section-title'
import { ProjectCard } from './project-card'
import { ArrowRightIcon } from '@/assets/icons/usabilities'

export function Projects() {
  return (
    <section className="space-y-4">
      <SectionTitle
        title="highlighted projects"
        subtitle="Main projects that i've working on"
      />

      <div className="rounded-md ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className="flex w-full justify-center">
        <Button className="self-end">
          <span>View more</span>
          <ArrowRightIcon className="text-sm" />
        </Button>
      </div>
    </section>
  )
}
