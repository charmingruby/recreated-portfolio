interface TechBadgeProps {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="rounded-full bg-primary-dark px-3 py-1 font-alt text-sm uppercase ">
      <span className="text-primary-light">{name}</span>
    </div>
  )
}
