interface TechBadgeProps {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="self-end rounded-full bg-primary-dark px-3 py-0.5 font-alt text-sm uppercase ">
      <span className="text-primary-light">{name}</span>
    </div>
  )
}
