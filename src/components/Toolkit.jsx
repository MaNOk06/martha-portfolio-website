import { toolkit, buildStyle } from '../data/projects'
import { useReveal } from './useReveal'

export default function Toolkit() {
  const reveal = useReveal()
  return (
    <section className="section" id="toolkit">
      <div ref={reveal.ref} className={`shell ${reveal.className}`}>
        <p className="eyebrow">how i build</p>
        <p className="build-intro">
          I am a <span className="hl">programmer</span> at heart. I move fast
          with AI as my pair programmer, ship real things, and pick up the deep
          parts as I go.
        </p>
        <div className="kit">
          {toolkit.map((col) => (
            <div className="kit-col" key={col.group}>
              <h4>{col.group}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
