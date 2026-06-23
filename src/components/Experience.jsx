import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { experience } from '../data/experience'
import { useReveal } from './useReveal'

export default function Experience() {
  const reveal = useReveal()
  const [active, setActive] = useState(0)
  const barRef = useRef(null)
  const btnRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const measure = () => {
    const btn = btnRefs.current[active]
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth })
  }

  useLayoutEffect(measure, [active])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const tab = experience[active]

  return (
    <section className="section" id="experience">
      <div ref={reveal.ref} className={`shell ${reveal.className}`}>
        <p className="eyebrow">experience</p>

        <div className="tabs-bar" ref={barRef} role="tablist">
          {experience.map((t, i) => (
            <button
              key={t.key}
              ref={(node) => (btnRefs.current[i] = node)}
              className={`tab ${i === active ? 'active' : ''}`}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {t.key}
            </button>
          ))}
          <span
            className="tab-indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
          />
        </div>

        <div className="exp-list" key={active}>
          {tab.entries.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-meta">
                <div className="exp-org">{e.org}</div>
                <div className="exp-time">{e.time}</div>
              </div>
              <div className="exp-body">
                <p className="exp-role">{e.role}</p>
                <p className="exp-blurb">{e.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
