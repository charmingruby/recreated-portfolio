import { Medias } from './medias'

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center space-y-2">
      <p className="text-md mt-4 font-thin text-light-darker">
        Designed & Built by &#169;Gustavo Dias
      </p>
      <Medias />
    </div>
  )
}
