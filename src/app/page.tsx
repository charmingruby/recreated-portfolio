import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

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
