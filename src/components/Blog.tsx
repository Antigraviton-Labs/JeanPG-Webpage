import { AnimatePresence, motion } from 'motion/react'

interface BlogProps {
  isOpen: boolean
  onClose: () => void
}

const articles = [
  {
    title: 'THE ART OF LAYERING',
    category: 'TECHNIQUE',
    date: 'MARCH 2025',
    excerpt: 'Master the centuries-old practice of combining fragrances to create a scent uniquely yours.',
    number: '01',
  },
  {
    title: 'ON STILL WATER',
    category: 'REFLECTION',
    date: 'FEBRUARY 2025',
    excerpt: 'How silence and stillness shape the most evocative compositions in modern perfumery.',
    number: '02',
  },
  {
    title: 'THE SCENT OF PROVENCE',
    category: 'ORIGIN',
    date: 'JANUARY 2025',
    excerpt: 'A journey through the lavender fields and citrus groves that inspire our most beloved notes.',
    number: '03',
  },
  {
    title: 'BOTTLE DESIGN IN THE AGE OF SILENCE',
    category: 'DESIGN',
    date: 'DECEMBER 2024',
    excerpt: 'When the vessel speaks as loudly as the fragrance within — a study in sculptural restraint.',
    number: '04',
  },
]

export default function Blog({ isOpen, onClose }: BlogProps) {
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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>JOURNAL</span>
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

          {/* FEATURED ARTICLE */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '480px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1c2d45, #2a4a73)',
              padding: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '16px' }}>
                FEATURED
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
                FEBRUARY 2025
              </div>
              <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.4)', marginBottom: '20px' }} />
              <h2 style={{ fontSize: 'clamp(28px,3vw,48px)', fontWeight: 400, lineHeight: 0.95, color: 'white', letterSpacing: '-0.01em' }}>
                THE ART OF<br />LAYERING
              </h2>
            </div>
            <div style={{
              background: 'white', padding: 'clamp(48px,6vw,80px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.9, color: 'rgba(12,12,14,0.7)', marginBottom: '24px' }}>
                "The true connoisseur does not wear one fragrance — they compose."
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} style={{
                fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)',
                textDecoration: 'none', cursor: 'pointer',
              }}>
                CONTINUE READING →
              </a>
            </div>
          </div>

          {/* 3-COL ARTICLE GRID */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px',
            padding: 'clamp(40px,5vw,64px) clamp(24px,6vw,80px)',
          }}>
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top panel */}
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                  padding: '24px', position: 'relative',
                }}>
                  <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
                    {article.category}
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', right: '20px', fontSize: '48px', color: 'rgba(255,255,255,0.06)' }}>
                    {article.number}
                  </div>
                </div>
                {/* Bottom panel */}
                <div style={{ background: 'white', padding: '24px' }}>
                  <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>
                    {article.date}
                  </div>
                  <div style={{ fontSize: '16px', letterSpacing: '0.02em', color: '#0c0c0e', marginBottom: '12px' }}>
                    {article.title}
                  </div>
                  <div style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(12,12,14,0.5)', marginBottom: '16px', textTransform: 'none' }}>
                    {article.excerpt}
                  </div>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{
                    fontSize: '9px', letterSpacing: '0.2em', color: 'var(--accent)',
                    textDecoration: 'none', cursor: 'pointer',
                  }}>
                    READ MORE →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
