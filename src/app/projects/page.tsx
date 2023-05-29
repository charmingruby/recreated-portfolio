import { CaretIcon } from '@/assets/icons/usabilities'
import { SectionTitle } from '@/components/shared/section-title'
import Link from 'next/link'

export default function Projects() {
  return (
    <div>
      <Link
        href="/"
        className="mb-2 flex w-24 cursor-pointer text-light-dark transition-colors hover:text-light-main"
      >
        <CaretIcon className="-rotate-90" />
        <span>Go back</span>
      </Link>

      <SectionTitle title="All projects" />
    </div>
  )
}
