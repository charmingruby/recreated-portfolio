import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Experiences } from '@/components/sections/experiences'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

export default function Home() {
  return (
    <div className="space-y-16">
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  )
}
