import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'group flex items-center gap-1 rounded-full border border-primary-main bg-dark-main px-3 py-1 font-alt leading-relaxed text-primary-main transition-colors hover:bg-primary-main hover:text-dark-main',
        className,
      )}
    >
      {children}
    </button>
  )
}
