import { mediasList } from '@/utils/data/mediasList'

export function Medias() {
  return (
    <div className="flex gap-2">
      {mediasList.map((media) => (
        <a href="" key={media.name} className="group text-lg">
          {media.icon}
        </a>
      ))}
    </div>
  )
}
