import { Medias } from './medias'

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center space-y-3">
      <p className="text-md mt-4 text-center font-thin text-light-darker">
        Designed & Built by &#169;Gustavo Dias
      </p>
      <Medias />
    </div>
  )
}
