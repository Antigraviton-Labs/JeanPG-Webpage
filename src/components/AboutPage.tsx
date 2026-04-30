import { AnimatePresence, motion } from 'motion/react'

interface AboutPageProps {
  isOpen: boolean
  onClose: () => void
}

const timeline = [
  { year: '1976', event: 'Jean Paul Gaultier founded his maison in Paris, redefining fashion with audacity and freedom.' },
  { year: '1993', event: 'CLASSIQUE launched — the iconic corset bottle that became a symbol of feminine power.' },
  { year: '1995', event: 'LE MÂLE introduced — the sailor bottle that revolutionised masculine fragrance.' },
  { year: '2010', event: 'The JPG Atelier opens, offering bespoke fragrance consultations worldwide.' },
  { year: '2017', event: 'SCANDAL arrives — a bold new chapter in the JPG fragrance legacy.' },
  { year: '2025', event: 'The maison continues to push boundaries, blending heritage with innovation.' },
]

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'var(--bg-base)', overflowY: 'auto',
          }}
        >
          {/* STICKY HEADER BAR */}
          <div style={{
            position: 'sticky', top: 0, zIndex: 10, height: 72,
            backgroundColor: 'rgba(248,246,242,0.92)',
            backdropFilter: 'blur(24px) saturate(180%)',
            borderBottom: '1px solid rgba(12,12,14,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 clamp(24px,6vw,80px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
                <path d="M5 10 Q10 4 15 10" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M7 14 Q10 8 13 14" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="10" y1="14" x2="10" y2="18" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#0c0c0e' }}>JPG</span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>ABOUT</span>
            </div>
            <button onClick={onClose} style={{
              padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em',
              color: 'rgba(12,12,14,0.6)', background: 'transparent',
              border: '1px solid rgba(12,12,14,0.1)', borderRadius: 100,
              cursor: 'pointer', fontFamily: 'var(--font-serif)',
              transition: 'all 0.3s ease',
            }}>
              × CLOSE
            </button>
          </div>

          {/* HERO SECTION */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1c2d45, #2a4a73)',
              padding: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.85)', marginBottom: '16px' }}>
                THE MAISON
              </div>
              <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', fontWeight: 400, lineHeight: 0.9, color: 'white', letterSpacing: '-0.01em' }}>
                JEAN PAUL<br />GAULTIER
              </h2>
              <div style={{ width: '40px', height: '1px', background: 'rgba(147,197,253,0.4)', margin: '24px 0' }} />
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
                SINCE 1976 — PARIS
              </div>
            </div>
            <div style={{
              background: 'white', padding: 'clamp(48px,6vw,80px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.9, color: 'rgba(12,12,14,0.7)', marginBottom: '24px' }}>
                "I have always believed that fragrance is the most intimate form of self-expression. A scent lingers in memory longer than any image."
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)' }}>
                — JEAN PAUL GAULTIER
              </div>
            </div>
          </div>

          {/* PHILOSOPHY */}
          <div style={{
            padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,80px)',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
          }}>
            <div>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'var(--accent)', marginBottom: '16px' }}>
                PHILOSOPHY
              </div>
              <h3 style={{ fontSize: 'clamp(28px,3vw,48px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em', marginBottom: '24px' }}>
                BOLDNESS.<br />AUTHENTICITY.<br /><em>ETERNITY.</em>
              </h3>
            </div>
            <div>
              <p style={{ fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em', color: 'rgba(12,12,14,0.6)', marginBottom: '20px', textTransform: 'none' }}>
                For nearly five decades, the maison of Jean Paul Gaultier has championed freedom, diversity, and the courage to defy convention. From the runway to the fragrance bottle, every creation carries the unmistakable DNA of audacity.
              </p>
              <p style={{ fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em', color: 'rgba(12,12,14,0.6)', textTransform: 'none' }}>
                Our fragrances are not merely scents — they are statements. Each bottle is a sculpture, each note a declaration. We believe that luxury should be felt, not just seen.
              </p>
            </div>
          </div>

          {/* TIMELINE */}
          <div style={{
            padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,80px)',
            borderTop: '1px solid rgba(12,12,14,0.07)',
          }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'var(--accent)', marginBottom: '32px' }}>
              HERITAGE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px',
                    padding: '24px 0', borderBottom: '1px solid rgba(12,12,14,0.06)',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '24px', fontWeight: 400, color: '#0c0c0e', letterSpacing: '-0.02em' }}>
                    {item.year}
                  </div>
                  <div style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', letterSpacing: '0.1em', textTransform: 'none' }}>
                    {item.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,80px)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'var(--accent)', marginBottom: '16px' }}>
              DISCOVER
            </div>
            <h3 style={{ fontSize: 'clamp(28px,3vw,48px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em', marginBottom: '32px' }}>
              EXPERIENCE THE MAISON
            </h3>
            <button style={{
              background: 'var(--accent)', color: 'white', padding: '14px 40px',
              fontSize: '10px', letterSpacing: '0.22em', borderRadius: '2px',
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}>
              BOOK A CONSULTATION
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
