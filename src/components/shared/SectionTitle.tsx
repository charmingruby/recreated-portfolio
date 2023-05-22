interface SectionTitleProps {
  content: string
}

export function SectionTitle({ content }: SectionTitleProps) {
  return (
    <h2 className="text-sm font-bold uppercase leading-tight text-primary-main">
      {`./../${content}`}
    </h2>
  )
}
