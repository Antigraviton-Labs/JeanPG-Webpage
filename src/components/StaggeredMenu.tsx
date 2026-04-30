import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onCollectionOpen: () => void
}

const navItems = ['HOME', 'COLLECTION', 'SHOP', 'FRAGRANCE FAMILIES', 'ATELIER', 'CONTACT']

export default function StaggeredMenu({ isOpen, onToggle, onCollectionOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (isOpen) {
      // OPEN
      const tl = gsap.timeline()
      timelineRef.current = tl

      // 1. Cycle label
      if (menuLabelRef.current) {
        gsap.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' })
      }
      if (closeLabelRef.current) {
        gsap.fromTo(closeLabelRef.current, { y: '100%' }, { y: '0%', duration: 0.4, ease: 'power3.inOut' })
      }

      // 2. Prelayer 1
      tl.to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0)

      // 3. Prelayer 2
      tl.to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08)

      // 4. Panel
      tl.to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15)

      // 5. Prelayers slide out
      tl.to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)

      // 6. Nav items stagger
      const items = navItemsRef.current.filter(Boolean)
      tl.fromTo(items, { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06,
      }, 0.6)

      // Socials
      if (socialsRef.current) {
        tl.fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.7)
      }
    } else {
      // CLOSE
      const tl = gsap.timeline()
      timelineRef.current = tl

      // 1. Nav items fade out
      const items = navItemsRef.current.filter(Boolean)
      tl.to(items, { x: 40, opacity: 0, duration: 0.3, stagger: 0.04, ease: 'power3.in' }, 0)

      if (socialsRef.current) {
        tl.to(socialsRef.current, { opacity: 0, duration: 0.2 }, 0)
      }

      // 2. Panel slides out
      tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2)

      // 3. Cycle label back
      if (menuLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.3)
      }
      if (closeLabelRef.current) {
        tl.to(closeLabelRef.current, { y: '100%', duration: 0.4, ease: 'power3.inOut' }, 0.3)
      }
    }
  }, [isOpen])

  const handleNavClick = (item: string) => {
    if (item === 'COLLECTION') {
      onCollectionOpen()
      onToggle()
    }
  }

  return (
    <div className="staggered-menu">
      {/* TOGGLE BUTTON */}
      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        onClick={onToggle}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef}>MENU</span>
          <span ref={closeLabelRef}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* PRELAYERS */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* MENU PANEL */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {navItems.map((item, i) => (
            <li key={item} ref={(el) => { navItemsRef.current[i] = el }}>
              <a onClick={() => handleNavClick(item)}>{item}</a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#" onClick={(e) => e.preventDefault()}>INSTAGRAM</a>
            <a href="#" onClick={(e) => e.preventDefault()}>FACEBOOK</a>
            <a href="#" onClick={(e) => e.preventDefault()}>TWITTER</a>
          </div>
        </div>
      </div>
    </div>
  )
}
