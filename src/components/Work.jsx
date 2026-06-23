import { projects } from '../data/projects'
import { useReveal } from './useReveal'

export default function Work() {
  const reveal = useReveal()
  return (
    <section className="section" id="work">
      <div ref={reveal.ref} className={`shell ${reveal.className}`}>
        <p className="eyebrow">selected work</p>
        <div className="work-grid">
          {projects.map((p) => (
            <a className="card" key={p.index} href={p.link}>
              <div className="card-top">
                <span>{p.index}</span>
                <span className="tag-status" data-s={p.status}>
                  {p.status}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p className="card-blurb">{p.blurb}</p>
              <span className="card-role">{p.role}</span>
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <span className="card-link">
                View project <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
