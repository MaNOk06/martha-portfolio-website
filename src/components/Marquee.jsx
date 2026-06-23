import { marquee } from '../data/projects'

export default function Marquee() {
  // Doubled so the loop is seamless.
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  )
}
