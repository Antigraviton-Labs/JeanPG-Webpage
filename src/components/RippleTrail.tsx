import { useRef, useEffect, useCallback } from 'react'

const POOL_SIZE = 80

interface Ripple {
  active: boolean
  age: number
  x: number
  y: number
}

export default function RippleTrail() {
  const ripplesRef = useRef<Ripple[]>(
    Array.from({ length: POOL_SIZE }, () => ({ active: false, age: 0, x: 0, y: 0 }))
  )
  const divsRef = useRef<(HTMLDivElement | null)[]>([])
  const lastPointRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const spawnRipple = useCallback((x: number, y: number) => {
    const ripples = ripplesRef.current
    for (let i = 0; i < POOL_SIZE; i++) {
      if (!ripples[i].active) {
        ripples[i] = { active: true, age: 0, x, y }
        return
      }
    }
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPointRef.current.x
      const dy = e.clientY - lastPointRef.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > 25) {
        spawnRipple(e.clientX, e.clientY)
        lastPointRef.current = { x: e.clientX, y: e.clientY }
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [spawnRipple])

  useEffect(() => {
    const tick = () => {
      const ripples = ripplesRef.current
      for (let i = 0; i < POOL_SIZE; i++) {
        const r = ripples[i]
        if (!r.active) continue
        r.age += 0.012
        if (r.age >= 1) {
          r.active = false
          r.age = 0
        }
        const el = divsRef.current[i]
        if (el) {
          const size = 20 + r.age * (300 - 20)
          const opacity = 1 - Math.pow(r.age, 1.2)
          el.style.width = `${size}px`
          el.style.height = `${size}px`
          el.style.left = `${r.x - size / 2}px`
          el.style.top = `${r.y - size / 2}px`
          el.style.opacity = r.active ? `${opacity}` : '0'
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <>
      {/* SVG FILTER */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="liquid-trail">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* RIPPLE CONTAINER */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 30, pointerEvents: 'none' }}>
        {ripplesRef.current.map((_, i) => (
          <div
            key={i}
            ref={(el) => { divsRef.current[i] = el }}
            style={{
              position: 'absolute', borderRadius: '50%',
              backdropFilter: 'url(#liquid-trail) blur(1px)',
              boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(197,168,76,0.15)',
              opacity: 0, width: 0, height: 0,
            }}
          />
        ))}
      </div>
    </>
  )
}
