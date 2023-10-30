import { mediasList } from '@//data/mediasList'

export function Medias() {
  return (
    <div className="flex gap-2">
      {mediasList.map((media) => (
        <a href={media.url} key={media.name} className="group text-lg">
          {media.icon}
        </a>
      ))}
    </div>
  )
}
