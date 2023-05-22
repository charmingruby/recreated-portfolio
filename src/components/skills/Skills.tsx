import {
  NodeIcon,
  ReactIcon,
  NextIcon,
  TypescriptIcon,
} from '@/utils/icons/technologies'
import { SectionTitle } from '../shared/SectionTitle'

export function Skills() {
  return (
    <section>
      <SectionTitle content="Tooling" />

      {/* Main Stack */}
      <div className="flex gap-6 text-2xl text-light-darker">
        <NodeIcon />
        <NextIcon />
        <ReactIcon />
        <TypescriptIcon />
      </div>
    </section>
  )
}
