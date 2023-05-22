export function Apresentation() {
  const role = 'Full Stack Developer'
  const roleFormatted = `<${role} />`

  return (
    <div>
      <h1 className="m-0 text-5xl font-bold leading-tight">Gustavo Dias</h1>

      <div className="">
        <h2 className="text-xl font-medium">{roleFormatted}</h2>
      </div>

      <div className="max-w-sm leading-relaxed text-light-dark">
        <h3>
          I build scalable, reactive and modern applications for the web with
          what is new in the market.
        </h3>
      </div>
    </div>
  )
}
