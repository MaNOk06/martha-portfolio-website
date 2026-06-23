import { useEffect, useRef, useState } from 'react'

// Adds a gentle fade-up the first time a section scrolls into view.
// Respects prefers-reduced-motion via the CSS class fallback.
export function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, className: shown ? 'reveal in' : 'reveal' }
}
