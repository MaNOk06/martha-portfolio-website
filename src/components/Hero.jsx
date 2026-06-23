import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import Waveform from './Waveform'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <header className="hero shell" id="top" ref={heroRef}>
      <div className="hero-glow" aria-hidden="true" />

      <p className="hero-eyebrow">
        <span className="arrow">&#9656;</span>
        <span>I am a </span>
        <span className="rotator">
          <span className="rotator-track">
            {profile.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
            <span>{profile.roles[0]}</span>
          </span>
        </span>
      </p>

      <h1>
        <span className="line l1">
          <span>{profile.firstName}</span>
        </span>
        <span className="line l2">
          <span className="surname">{profile.lastName}</span>
        </span>
      </h1>

      <Waveform />

      <p className="hero-bio">{profile.tagline}</p>

      <div className="cta-row">
        <a className="btn btn-primary" href="#work">
          View work
        </a>
        <a
          className="btn btn-ghost"
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
        <a className="btn btn-ghost" href={`mailto:${profile.links.email}`}>
          Get in touch
        </a>
      </div>
    </header>
  )
}
