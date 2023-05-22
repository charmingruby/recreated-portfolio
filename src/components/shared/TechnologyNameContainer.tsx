interface TechnologyNameContainerProps {
  name: string
}

export function TechnologyNameContainer({
  name,
}: TechnologyNameContainerProps) {
  return (
    <div className="rounded-full bg-primary-dark px-3 py-1 text-sm font-bold uppercase">
      <span className="text-primary-light">{name}</span>
    </div>
  )
}
