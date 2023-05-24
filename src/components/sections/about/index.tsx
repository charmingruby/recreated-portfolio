import { SectionTitle } from '../../shared/section-title'

export function About() {
  return (
    <section className="space-y-4">
      <SectionTitle content="About me" />
      <div className="space-y-4 leading-relaxed text-light-dark">
        <p>
          Hello! My name is Gustavo and I enjoy creating things that live on the
          internet. My interest at web development started in 2020, after i got
          to the university where i got to a Junior Company, my first contact
          with Software Development.
        </p>
        <p>
          Memorable moment was when i got passionated at programming: building
          an E-Commerce with no knowledge. I had to rush to learn HTML/CSS for
          the interfaces, PHP with MySQL to the backend. Hard and stresseful?
          Yes. But, rewarding and amazing.
        </p>
        <p>
          Fast-forward to today, I{"'"}ve been studying the environment of
          JavaScript since 2021. At the beginning I was fascinated and focused
          with front end but, today, I{"'"}m looking to learn of each part of
          the development.
        </p>
      </div>
    </section>
  )
}
