import { AnimatePresence, motion } from 'motion/react'

interface FamiliesPageProps {
  isOpen: boolean
  onClose: () => void
}

const dotColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

const families = [
  { name: 'FLORAL', subtitle: 'ROSE GARDEN', desc: 'Delicate blooms from Grasse to Damascus, capturing the essence of gardens in full bloom.', concentration: 'Eau de Parfum', season: 'Spring/Summer', highNotes: 'Rose, Jasmine', medNotes: 'Iris, Peony', lowNotes: 'Musk, Amber' },
  { name: 'ORIENTAL', subtitle: 'SPICE ROUTE', desc: 'Amber, vanilla, and the warmth of ancient trade paths — rich, enveloping, unforgettable.', concentration: 'Extrait de Parfum', season: 'Autumn/Winter', highNotes: 'Saffron, Cardamom', medNotes: 'Cinnamon, Myrrh', lowNotes: 'Amber, Vanilla' },
  { name: 'WOODY', subtitle: 'FOREST FLOOR', desc: 'Cedar, sandalwood, and vetiver from the world\'s oldest forests — grounded and contemplative.', concentration: 'Eau de Parfum', season: 'Year-round', highNotes: 'Bergamot, Pine', medNotes: 'Cedar, Vetiver', lowNotes: 'Sandalwood, Moss' },
  { name: 'FRESH', subtitle: 'MEDITERRANEAN COAST', desc: 'Citrus, sea salt, and the clarity of morning light along the Côte d\'Azur.', concentration: 'Eau de Toilette', season: 'Summer', highNotes: 'Lemon, Grapefruit', medNotes: 'Sea Salt, Lavender', lowNotes: 'White Musk, Cedar' },
  { name: 'CHYPRE', subtitle: 'MOSS & BERGAMOT', desc: 'The classic structure reborn for the modern connoisseur — bergamot, oakmoss, and labdanum.', concentration: 'Eau de Parfum', season: 'Autumn', highNotes: 'Bergamot, Neroli', medNotes: 'Rose, Jasmine', lowNotes: 'Oakmoss, Patchouli' },
  { name: 'GOURMAND', subtitle: 'PARISIAN PÂTISSERIE', desc: 'Vanilla, caramel, and the indulgence of edible elegance — a feast for the senses.', concentration: 'Eau de Parfum Intense', season: 'Winter', highNotes: 'Caramel, Pear', medNotes: 'Honey, Almond', lowNotes: 'Vanilla, Chocolate' },
]

export default function FamiliesPage({ isOpen, onClose }: FamiliesPageProps) {
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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>FAMILIES</span>
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

          {/* INTRO */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
            padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,80px)',
          }}>
            <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em', marginBottom: '24px' }}>
              THE WORLD'S FINEST NOTES.<br />YOUR SIGNATURE.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em', color: 'rgba(12,12,14,0.6)', marginBottom: '32px', textTransform: 'none' }}>
                Every great fragrance belongs to a family — a lineage of notes and traditions that define its character. Explore the six families that form the foundation of our collection.
              </p>
              <button style={{
                background: 'var(--accent)', color: 'white', padding: '14px 36px',
                fontSize: '10px', letterSpacing: '0.22em', borderRadius: '2px',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                textTransform: 'uppercase', width: 'fit-content',
              }}>
                DISCOVER YOUR SCENT
              </button>
            </div>
          </div>

          {/* FAMILY CARDS */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2px', padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)',
          }}>
            {families.map((fam, i) => (
              <motion.div
                key={fam.name}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {/* Top panel */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                  position: 'relative', padding: '24px',
                }}>
                  <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.85)', position: 'absolute', top: '20px', left: '24px' }}>
                    {fam.name}
                  </div>
                  <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                    <div style={{ fontSize: 'clamp(20px,3vw,32px)', color: 'white', letterSpacing: '-0.01em', marginBottom: '4px' }}>
                      {fam.subtitle}
                    </div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em' }}>
                      KEY NOTES: {fam.highNotes}
                    </div>
                  </div>
                </div>
                {/* Bottom panel */}
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '2px' }}>CONCENTRATION</div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{fam.concentration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '2px' }}>SEASON</div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{fam.season}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', lineHeight: 1.9, color: 'rgba(12,12,14,0.7)', marginBottom: '24px', textTransform: 'none' }}>
                    {fam.desc}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors.high, flexShrink: 0 }} />
                      <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>{fam.highNotes}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors.medium, flexShrink: 0 }} />
                      <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>{fam.medNotes}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors.low, flexShrink: 0 }} />
                      <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>{fam.lowNotes}</span>
                    </div>
                  </div>
                  <button style={{
                    fontSize: '9px', letterSpacing: '0.2em', color: 'var(--accent)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', textTransform: 'uppercase',
                  }}>
                    EXPLORE FAMILY →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
