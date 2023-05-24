import { Button } from '@/components/shared/button'

export function ContactForm() {
  return (
    <form className="border border-dark-light">
      <div>
        <input placeholder="example@email.com"></input>
      </div>

      <div className="flex w-full justify-end">
        <Button className="h-8 w-full justify-center bg-primary-main text-dark-main md:w-auto md:self-end">
          <span>Send</span>
        </Button>
      </div>
    </form>
  )
}
