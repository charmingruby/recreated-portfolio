interface FormFieldErrorMessageProps {
  message: string | undefined
}

export function FormFieldErrorMessage({ message }: FormFieldErrorMessageProps) {
  return <div className="text-red-500">{message}</div>
}
