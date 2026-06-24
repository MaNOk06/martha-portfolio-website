import { useReveal } from './useReveal'

export default function About() {
  const reveal = useReveal()
  return (
    <section className="section" id="about">
      <div ref={reveal.ref} className={`shell ${reveal.className}`}>
        <p className="eyebrow">about</p>
        <h2 className="about-lead">
          I turn <span className="hl">"someone should build this"</span> into
          something real.
        </h2>
        <div className="about-grid">
          <div>
            <p>
              <span className="strong">
                I am Martha, a computer engineering student in Ghana and a
                builder at heart.
              </span>{' '}
              I program my way from idea to shipped, and almost everything I
              make starts from a real problem I have watched people around me
              run into.
            </p>
            <p>
              Health records patients cannot get to. Exam revision that eats
              your whole week. Volunteers with no clean way to coordinate. Those
              are the things I build for, across the full stack and down to the
              hardware.
            </p>
          </div>
          <div className="about-aside">
            When I am not building, you will find me on the volleyball court,
            writing fiction, or simulating robots, or at church on
            Sundays and Fridays.
          </div>
        </div>
      </div>
    </section>
  )
}
