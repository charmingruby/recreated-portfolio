interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div>
      <h2 className="mb-1 text-sm font-bold uppercase leading-tight text-primary-main">
        {`./../${title}`}
      </h2>
      {title && <h3 className="text-2xl font-medium">{subtitle}</h3>}
    </div>
  )
}
