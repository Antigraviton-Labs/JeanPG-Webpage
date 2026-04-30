import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface HeroProps {
  collectionOpen: boolean
  menuOpen: boolean
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero({ collectionOpen, menuOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* FIXED VIDEO BACKGROUND */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden',
          filter: collectionOpen ? 'blur(100px)' : 'blur(0px)',
          transition: collectionOpen
            ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)'
            : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)',
        }}
      >
        <video
          src="/videos/hero-bg.mp4"
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)',
          }}
        />
      </div>

      {/* HERO TEXT BLOCK */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={collectionOpen ? 'hidden' : 'visible'}
          style={{
            position: 'absolute', top: '50%',
            left: 'clamp(24px, 6vw, 96px)',
            transform: 'translateY(-52%)',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left',
            maxWidth: 'clamp(340px, 48vw, 640px)',
          }}
        >
          {/* EYEBROW */}
          <motion.div
            variants={textVariants}
            style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.7)' }}>
              HAUTE PARFUMERIE · EST. 1976
            </span>
          </motion.div>

          {/* HEADLINE */}
          {[
            { text: 'THE SCENT', italic: false },
            { text: 'IS YOURS.', italic: true },
            { text: 'WEAR IT', italic: false },
            { text: 'BOLDLY.', italic: true },
          ].map((line) => (
            <div key={line.text} style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontSize: 'clamp(48px, 9.5vw, 130px)',
                  fontWeight: 400, lineHeight: 0.91,
                  letterSpacing: '-0.01em', textTransform: 'uppercase',
                  color: 'white', fontStyle: line.italic ? 'italic' : 'normal',
                  textShadow: '0 4px 32px rgba(0,0,0,0.35)',
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}

          {/* SUBTEXT */}
          <motion.div
            variants={textVariants}
            style={{ marginTop: '28px' }}
          >
            <p style={{
              fontSize: 'clamp(10px,1vw,11px)', letterSpacing: '0.2em',
              maxWidth: '340px', lineHeight: 1.9,
              color: 'rgba(255,255,255,0.6)', textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}>
              A PRIVATE WORLD OF FRAGRANCE. CURATED NOTES, THREE ICONIC BOTTLES,
              AND A CIRCLE OF CONNOISSEURS WHO UNDERSTAND THAT TRUE LUXURY HAS NO BOUNDARY.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      {!scrolled && (
        <div style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div
              className="scroll-dot"
              style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
            />
          </div>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
        </div>
      )}

      {/* SHOP NOW STICKY BUTTON */}
      <div
        className="glass-mid"
        style={{
          position: 'fixed', bottom: '32px', right: '32px', zIndex: 50,
          padding: 'clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)',
          fontSize: 'clamp(11px,1vw,14px)', letterSpacing: '0.2em', color: 'white',
          cursor: 'pointer',
          transform: menuOpen
            ? 'translateX(calc(-1 * clamp(260px,38vw,420px)))'
            : collectionOpen
              ? 'translateX(200px)'
              : 'none',
          opacity: collectionOpen ? 0 : 1,
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
        }}
      >
        SHOP NOW
      </div>
    </>
  )
}
