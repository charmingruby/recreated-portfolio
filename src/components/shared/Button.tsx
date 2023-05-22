import { ReactNode } from 'react'
import { ArrowRightIcon } from '@/utils/icons/usabilities'

interface ButtonProps {
  url?: string
  icon?: ReactNode
  onClick?: () => void
  content: string
}

export function Button({ url, onClick, icon, content }: ButtonProps) {
  if (!url) {
    return (
      <a href={url}>
        <button className="flex items-center gap-1 rounded-md border border-primary-main px-3 py-1 leading-relaxed text-primary-main">
          <span className="font-medium">Get in touch</span>
          <ArrowRightIcon />
        </button>
      </a>
    )
  }
  return (
    <button className="flex items-center gap-1 rounded-md border border-primary-main px-3 py-1 leading-relaxed text-primary-main">
      <span className="font-medium">Get in touch</span>
      <span>{icon}</span>
    </button>
  )
}
