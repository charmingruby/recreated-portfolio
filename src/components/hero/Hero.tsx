import { SectionTitle } from '../shared/SectionTitle'
import { Medias } from './Medias'
import { MainStack } from './MainStack'
import { Apresentation } from './Apresentation'

export function Hero() {
  return (
    <div className="mt-24 flex h-full flex-col lg:mt-0 lg:justify-center">
      <SectionTitle content="Hello, my name is" />
      <Apresentation />
      <MainStack />
      <Medias />
    </div>
  )
}
