import { SectionTitle } from '../../shared/section-title'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section className="space-y-4">
      <SectionTitle content="Connect with me" />
      <ContactForm />
    </section>
  )
}
