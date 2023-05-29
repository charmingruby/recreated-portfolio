import { Button } from '@/components/shared/button'
import { mediasList } from '@/data/mediasList'
import { ArrowRightIcon } from '@/assets/icons/usabilities'

export function Medias() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <a className="w-full" href="#contact">
        <Button className="w-full">
          <span className="font-medium">Get in touch</span>
          <ArrowRightIcon className="text-sm" />
        </Button>
      </a>

      <div className="flex justify-between gap-2">
        {mediasList.map((media) => (
          <a href="" className="" key={media.url}>
            <button className="group flex items-center rounded-full p-2 text-lg transition-colors hover:bg-dark-light">
              {media.icon}
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}
