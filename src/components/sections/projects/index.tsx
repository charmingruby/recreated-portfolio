import { Button } from '@/components/shared/button'
import { SectionTitle } from '../../shared/section-title'
import { ArrowRightIcon } from '@/assets/icons/usabilities'
import Link from 'next/link'
import { ProjectsList } from './projects-list'

export function Projects() {
  return (
    <section className="space-y-4" id="projects">
      <SectionTitle
        title="highlighted projects"
        subtitle="Main projects that i've working on"
      />

      <ProjectsList />

      <div className="flex w-full justify-center">
        <Link href="/projects">
          <Button className="self-end">
            <span>View more</span>
            <ArrowRightIcon className="text-sm" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
