import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'

export default function Home() {
  return (
    <div className="space-y-16">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
