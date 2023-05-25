import { SectionTitle } from '../../shared/section-title'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section className="space-y-4">
      <SectionTitle
        title="Connect with me"
        subtitle="Let's work together? Get  in touch  with me"
      />

      <div>
        <ContactForm />
      </div>
    </section>
  )
}
