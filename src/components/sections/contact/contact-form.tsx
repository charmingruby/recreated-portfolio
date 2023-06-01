'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/shared/button'
import { useForm } from 'react-hook-form'

const sendEmailFormSchema = z.object({
  email: z.string().email().nonempty('E-mail is required'),
  subject: z.string().min(8).max(48).nonempty('Subject is required'),
  message: z.string().min(10).max(500).nonempty('Message is required'),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(sendEmailFormSchema),
  })

  const handleSendEmail = (data: SendEmailFormData) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendEmail)}
      className="flex w-full flex-col gap-4 rounded-md"
    >
      <div>
        <input
          className="w-full rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-2 text-base placeholder:text-light-darker focus:border-primary-main focus:bg-dark-lighten focus:outline-none"
          placeholder="Email"
          type="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          className="w-full rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-2 text-base placeholder:text-light-darker focus:outline-none"
          placeholder="Subject"
          type="text"
          {...register('subject')}
        />
        {errors.email && <span>{errors.subject.message}</span>}
      </div>

      <div>
        <textarea
          className="h-28 w-full resize-none rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-3 text-base placeholder:text-light-darker focus:outline-none"
          placeholder="Message"
          maxLength={500}
          {...register('message')}
        />
        {errors.email && <span>{errors.message.message}</span>}
      </div>

      <div className="flex w-full justify-end">
        <Button
          type="submit"
          className="h-8 w-full justify-center bg-primary-main px-6 text-dark-main md:w-auto md:self-end"
        >
          <span>Send</span>
        </Button>
      </div>
    </form>
  )
}
