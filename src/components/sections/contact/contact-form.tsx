'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/shared/button'
import { useForm } from 'react-hook-form'
import { FormFieldErrorMessage } from './form-field-error-message'
import { toast } from 'react-hot-toast'

const sendEmailFormSchema = z.object({
  email: z
    .string()
    .email('Invalid e-mail format.')
    .nonempty('E-mail is required.'),
  subject: z
    .string()
    .min(8, 'Subject must have at least 8 characters.')
    .max(48, 'Subject must be a maximum of 48 characters.')
    .nonempty('Subject is required.'),
  message: z
    .string()
    .min(10, 'Message must have at least 10 characters.')
    .max(500, 'Message must be a maximum of 500 characters.')
    .nonempty('Message is required.'),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  const handleSendEmail = async (data: SendEmailFormData) => {
    toast('E-mail sent successfully!', {
      style: {
        background: '#4CAF50',
        color: '#fff',
      },
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendEmail)}
      className="flex w-full flex-col gap-4 rounded-md"
    >
      <div className="space-y-2">
        <input
          className={`
          ${
            errors.email
              ? 'border-red-500 focus:border-red-500'
              : 'focus:border-primary-main'
          }          w-full rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-2 text-base placeholder:text-light-darker focus:bg-dark-lighten focus:outline-none`}
          placeholder="Email"
          {...register('email')}
        />
        {errors.email && (
          <FormFieldErrorMessage message={errors.email?.message} />
        )}
      </div>

      <div className="space-y-2">
        <input
          className={`
          ${
            errors.subject
              ? 'border-red-500 focus:border-red-500'
              : 'focus:border-primary-main'
          }
          w-full rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-2 text-base placeholder:text-light-darker focus:bg-dark-lighten focus:outline-none`}
          placeholder="Subject"
          type="text"
          {...register('subject')}
        />
        {errors.subject && (
          <FormFieldErrorMessage message={errors.subject?.message} />
        )}
      </div>

      <div className="space-y-2">
        <textarea
          className={`
          ${
            errors.message
              ? 'border-red-500 focus:border-red-500'
              : 'focus:border-primary-main'
          }          
          h-28 w-full resize-none rounded-md border-2 border-dark-lighten bg-dark-light px-4 py-3 text-base placeholder:text-light-darker focus:bg-dark-lighten focus:outline-none
          `}
          placeholder="Message"
          {...register('message')}
        />
        {errors.message && (
          <FormFieldErrorMessage message={errors.message?.message} />
        )}
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
