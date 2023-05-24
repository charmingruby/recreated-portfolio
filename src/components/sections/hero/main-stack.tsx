import { TechBadge } from '../../shared/tech-badge'

export function MainStack() {
  const technologies = ['Next', 'React', 'Node', 'TypeScript']

  return (
    <div className="mb-10 flex gap-2">
      {technologies.map((technology) => (
        <TechBadge key={technology} name={technology} />
      ))}
    </div>
  )
}
