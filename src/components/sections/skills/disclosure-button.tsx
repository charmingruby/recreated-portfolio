'use client'

import { CaretIcon } from '@/assets/icons/usabilities'
import { clsx } from 'clsx'

interface DisclosureButtonProps {
  isOpen: boolean
  categoryName: string
}

export function DisclosureButton({
  isOpen,
  categoryName,
}: DisclosureButtonProps) {
  return (
    <div className="m-0 flex w-full items-center justify-between rounded-sm bg-dark-light px-2 py-2 transition-colors hover:bg-dark-lighten">
      <span className="font-alt text-base uppercase">{categoryName}</span>
      <CaretIcon
        className={clsx('rotate-0 text-2xl transition-transform', {
          'rotate-180 transform': isOpen,
        })}
      />
    </div>
  )
}
