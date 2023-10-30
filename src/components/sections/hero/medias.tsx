import { Button } from '@/components/ui/button'
import { AltGithubIcon } from '@/assets/icons/usabilities'
import Link from 'next/link'

export function Medias() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <Link
        className="w-full"
        target="blank"
        href="https://www.linkedin.com/in/gustavo-dias21/"
      >
        <Button className="w-full">
          <span className="font-medium">Get in touch</span>
        </Button>
      </Link>

      <a
        href="https://github.com/charmingruby"
        target="blank"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-primary-main text-primary-main transition-colors hover:bg-primary-light hover:text-dark-main md:w-11"
      >
        <AltGithubIcon size={20} />
      </a>
    </div>
  )
}
