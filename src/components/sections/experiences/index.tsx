import { SectionTitle } from '@/components/section-title'
import { ExperiencesList } from './experiences-list'
import { ArrowRightIcon } from '@/assets/icons/usabilities'
import { Button } from '@/components/ui/button'

export function Experiences() {
  return (
    <section className="space-y-4" id="experiences">
      <SectionTitle title="working experience" subtitle="Career" />
      <ExperiencesList />
      <div className="flex w-full justify-center">
        <a href="CV-GustavoDias.pdf">
          <Button className="self-end">
            <span>View full resume</span>
            <ArrowRightIcon className="text-sm" />
          </Button>
        </a>
      </div>
    </section>
  )
}
