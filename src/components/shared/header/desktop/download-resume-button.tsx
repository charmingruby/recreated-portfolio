import { DownloadIcon } from '@/assets/icons/usabilities'
import Link from 'next/link'
import { Button } from '../../button'

export function DownloadResumeButton() {
  return (
    <Link href="../../../../data/CV-GustavoDias.pdf" target="_blank" download>
      <Button className="ml-2">
        <span className="mr-1 text-sm font-medium">Resume</span>
        <DownloadIcon className="text-sm" />
      </Button>
    </Link>
  )
}
