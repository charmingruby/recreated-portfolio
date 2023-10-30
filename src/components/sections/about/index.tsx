import { SectionTitle } from '../../section-title'

export function About() {
  return (
    <section className="space-y-4" id="about">
      <SectionTitle title="About me" subtitle="Apresentation of myself" />
      <div className="space-y-4 leading-relaxed text-light-dark">
        <p>
          Hello! My name is Gustavo, and I am passionate about crafting dynamic
          experiences. My journey into web development began in 2020 when I
          started at{' '}
          <span className="font-semibold text-light-main">
            Computer Science
          </span>{' '}
          university at Federal University of Juiz de Fora(UFJF) and had the
          opportunity to join a Junior Company, my first foray into the world of
          software development.
        </p>
        <p>
          One particular moment stands out as a pivotal turning point in my
          programming journey: building an{' '}
          <span className="font-semibold text-light-main">
            E-Commerce website from scratch{' '}
          </span>
          , despite having no prior knowledge. This endeavor compelled me to
          swiftly acquire skills in HTML/CSS for frontend interfaces and PHP
          with MySQL for backend functionality. Although it was a challenging
          and occasionally stressful undertaking, the sense of reward and
          fulfillment I experienced was unparalleled.
        </p>
        <p>
          Since then, I have been immersing myself in the realm of{' '}
          <span className="font-semibold text-light-main">JavaScript</span>{' '}
          since 2021. While initially captivated by frontend development, I have
          since broadened my horizons and aspire to gain proficiency in every
          facet of the development process. My continuous dedication to learning
          and mastering various aspects of web development fuels my growth and
          fuels my enthusiasm for this ever-evolving field
        </p>
      </div>
    </section>
  )
}
