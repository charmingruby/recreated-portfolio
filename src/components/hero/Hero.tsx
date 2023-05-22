import { SectionTitle } from '../shared/SectionTitle'
import { Medias } from './Medias'
import { MainStack } from './MainStack'
import { Apresentation } from './Apresentation'

export function Hero() {
  return (
    <div className="flex h-full flex-col justify-center px-8 md:px-32">
      <SectionTitle content="Hello, my name is" />
      <Apresentation />
      <MainStack />
      <Medias />
    </div>
  )
}
