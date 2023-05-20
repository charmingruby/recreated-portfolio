import { Github, Linkedin, Instagram } from 'lucide-react'

export function Hero() {
  const navigationOptions = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <div className="flex h-full flex-col justify-center px-32">
      {/*  Apresentation */}
      <span className="text-sm font-bold uppercase text-primary-main">
        Hello, my name is
      </span>

      <h1 className="m-0 mb-5 text-5xl font-bold leading-tight">
        Gustavo Dias
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-medium">Full Stack Developer</h2>
      </div>

      <div className="mb-16 max-w-sm text-light-dark">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          magni sapiente itaque corrupti earum sint, rerum quae vitae dolorum
        </h3>
      </div>

      {/* Navigation */}
      <nav className="mb-16">
        <ul className="flex flex-col gap-3">
          {navigationOptions.map((navigationOption) => (
            <li
              key={navigationOption}
              className="flex items-center gap-2 text-sm font-bold uppercase before:h-px before:w-12 before:bg-light-main"
            >
              {navigationOption}
            </li>
          ))}
        </ul>
      </nav>

      {/* Medias  */}
      <div className="flex gap-6 text-light-darker">
        <a href="" className="">
          <Github size={28} />
        </a>

        <a href="">
          <Linkedin size={28} />
        </a>

        <a href="">
          <Instagram size={28} />
        </a>
      </div>
    </div>
  )
}
