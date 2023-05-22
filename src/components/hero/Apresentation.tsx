import { RolesTyping } from './RolesTyping'

export function Apresentation() {
  return (
    <div className="mb-4">
      <div className="mb-3">
        <h1 className="m-0 font-alt text-5xl font-bold leading-tight">
          Gustavo Dias
        </h1>
      </div>

      <div className="mb-1.5">
        <RolesTyping />
      </div>

      <div className="max-w-sm">
        <h3 className="leading-relaxed text-light-dark">
          I build scalable, reactive and modern applications for the web with
          what is new in the market.
        </h3>
      </div>
    </div>
  )
}
