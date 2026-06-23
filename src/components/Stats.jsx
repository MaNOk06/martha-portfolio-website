import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/profile'

function CountUp({ target }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const dur = 1100
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span className="num" ref={ref}>
      {n}
      <span className="plus">+</span>
    </span>
  )
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <CountUp target={s.value} />
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
