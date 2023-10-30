import { SectionTitle } from '../../section-title'
import { Medias } from './medias'
import { MainStack } from './main-stack'
import { Apresentation } from './apresentation'

export function Hero() {
  return (
    <div className="mx-auto mt-24 flex w-full flex-col lg:fixed lg:mt-0 lg:h-full lg:w-fit lg:justify-center">
      <SectionTitle title="Hello, my name is" />
      <Apresentation />
      <MainStack />
      <Medias />
    </div>
  )
}
