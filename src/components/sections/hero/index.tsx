import { SectionTitle } from '../../shared/section-title'
import { Medias } from './medias'
import { MainStack } from './main-stack'
import { Apresentation } from './apresentation'

export function Hero() {
  return (
    <div className="mt-24 flex flex-col lg:fixed lg:mt-0 lg:h-full lg:justify-center">
      <SectionTitle title="Hello, my name is" />
      <Apresentation />
      <MainStack />
      <Medias />
    </div>
  )
}
