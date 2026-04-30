import { useRef, useEffect, useState } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onBlogOpen: () => void
  onCollectionOpen: () => void
  onFamiliesOpen: () => void
  onShopOpen: () => void
  onAboutOpen: () => void
}

const navLinks = [
  { label: 'FAMILIES', action: 'onFamiliesOpen' as const },
  { label: 'COLLECTION', action: 'onCollectionOpen' as const },
  { label: 'SHOP', action: 'onShopOpen' as const },
  { label: 'ABOUT', action: 'onAboutOpen' as const },
  { label: 'JOURNAL', action: 'onBlogOpen' as const },
]

export default function Header({ menuOpen, onBlogOpen, onCollectionOpen, onFamiliesOpen, onShopOpen, onAboutOpen }: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const actionMap = { onFamiliesOpen, onCollectionOpen, onShopOpen, onAboutOpen, onBlogOpen }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = pillRef.current
    if (!el) return
    if (scrolled) {
      el.classList.add('scrolled')
    } else {
      el.classList.remove('scrolled')
    }
  }, [scrolled])

  return (
    <div ref={pillRef} className="navbar-pill">
      {/* LOGO */}
      <div style={{ borderRight: '1px solid rgba(12,12,14,0.08)', padding: '0 20px 0 14px', height: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
          <path d="M5 10 Q10 4 15 10" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M7 14 Q10 8 13 14" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="10" y1="14" x2="10" y2="18" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '16px', letterSpacing: '0.28em', color: '#0c0c0e' }}>JPG</span>
      </div>

      {/* NAV LINKS */}
      {navLinks.map((link, i) => (
        <a
          key={link.label}
          href="#"
          onClick={(e) => { e.preventDefault(); actionMap[link.action]() }}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: hoveredIdx === i ? '#0c0c0e' : 'rgba(12,12,14,0.55)',
            transition: 'color 0.2s ease',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {link.label}
        </a>
      ))}

      {/* SHOP NOW BUTTON */}
      <div style={{ padding: '0 6px', flexShrink: 0 }}>
        <button
          style={{
            background: '#1c3557',
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '10px',
            color: 'white',
            letterSpacing: '0.18em',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            transform: menuOpen ? 'translateX(calc(-1 * clamp(280px, 40vw, 440px)))' : 'none',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#253f63' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#1c3557' }}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  )
}
