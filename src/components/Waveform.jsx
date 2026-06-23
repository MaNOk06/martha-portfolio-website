import { useEffect, useRef } from 'react'

// A live oscilloscope-style trace. The signature element of the page.
// Draws a layered sine signal with a subtle baseline grid. Falls back to a
// single static trace when the visitor prefers reduced motion.
export default function Waveform() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let width = 0
    let height = 0
    let raf = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const css = getComputedStyle(document.documentElement)
    const signal = css.getPropertyValue('--signal').trim() || '#ff7a2d'
    const line = css.getPropertyValue('--line').trim() || '#232a33'

    const drawGrid = () => {
      ctx.strokeStyle = line
      ctx.lineWidth = 1
      const step = 48
      for (let x = step; x < width; x += step) {
        ctx.globalAlpha = 0.35
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const drawTrace = (t) => {
      const mid = height / 2
      ctx.beginPath()
      for (let x = 0; x <= width; x += 2) {
        const p = x / width
        const y =
          mid +
          Math.sin(p * 9 + t) * 18 * Math.sin(p * Math.PI) +
          Math.sin(p * 22 + t * 1.7) * 6
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = signal
      ctx.lineWidth = 2
      ctx.shadowColor = signal
      ctx.shadowBlur = 8
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    const render = (time) => {
      ctx.clearRect(0, 0, width, height)
      drawGrid()
      drawTrace(reduceMotion ? 0 : time / 650)
      if (!reduceMotion) raf = requestAnimationFrame(render)
    }

    resize()
    if (reduceMotion) {
      render(0)
    } else {
      raf = requestAnimationFrame(render)
    }

    const onResize = () => {
      resize()
      if (reduceMotion) render(0)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="wave-wrap" aria-hidden="true">
      <canvas ref={canvasRef} />
      <span className="wave-readout">signal · live</span>
    </div>
  )
}
