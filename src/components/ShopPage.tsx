import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

interface ShopPageProps {
  isOpen: boolean
  onClose: () => void
}

const dotColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

export default function ShopPage({ isOpen, onClose }: ShopPageProps) {
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({
    classique: '100ML',
    'le-male': '125ML',
    scandal: '80ML',
  })

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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>SHOP</span>
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
          <div style={{ padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)' }}>
            <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em', marginBottom: '16px' }}>
              SELECT YOUR FRAGRANCE
            </h2>
            <p style={{ fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em', color: 'rgba(12,12,14,0.6)', marginBottom: '32px', maxWidth: '480px', textTransform: 'none' }}>
              Each bottle is a testament to craftsmanship. Choose your signature from our collection of iconic fragrances.
            </p>
            <button style={{
              background: 'var(--accent)', color: 'white', padding: '14px 36px',
              fontSize: '10px', letterSpacing: '0.22em', borderRadius: '2px',
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}>
              SHOP NOW
            </button>
          </div>

          {/* PRODUCT CARDS */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px', padding: 'clamp(32px,4vw,48px) clamp(24px,6vw,80px)',
          }}>
            {/* CLASSIQUE */}
            <div className="card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '4px' }}>EAU DE PARFUM</div>
              <div style={{ fontSize: '24px', letterSpacing: '0.05em', color: '#0c0c0e', marginBottom: '8px' }}>CLASSIQUE</div>
              <div style={{ fontSize: '32px', color: '#0c0c0e', fontWeight: 400, marginBottom: '4px' }}>$185 / 100ML</div>
              <div style={{ margin: '16px 0' }}>
                {[
                  { level: 'high', label: 'HIGH', names: 'Rose, Rice Powder, Pear Blossom' },
                  { level: 'medium', label: 'MEDIUM', names: 'Orange Blossom, Ginger, Iris' },
                  { level: 'low', label: 'LOW', names: 'Vanilla, Musk, Amber' },
                ].map(n => (
                  <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors[n.level], flexShrink: 0 }} />
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(12,12,14,0.6)' }}>{n.label}:</span>
                    <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{n.names}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['30ML', '50ML', '100ML'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(p => ({ ...p, classique: s }))} style={{
                    padding: '8px 16px', fontSize: '9px', letterSpacing: '0.15em',
                    border: selectedSize.classique === s ? '1.5px solid var(--accent)' : '1px solid rgba(12,12,14,0.15)',
                    background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
                    textTransform: 'uppercase', color: '#0c0c0e', borderRadius: '2px',
                  }}>
                    {s}
                  </button>
                ))}
              </div>
              <button style={{
                background: 'var(--accent)', color: 'white', width: '100%',
                padding: '14px', fontSize: '10px', letterSpacing: '0.2em',
                border: 'none', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'inherit', textTransform: 'uppercase',
              }}>
                ADD TO BAG
              </button>
            </div>

            {/* LE MÂLE */}
            <div style={{
              background: '#1c3557', color: 'white', padding: '40px', borderRadius: '3px',
              boxShadow: '0 8px 48px rgba(28,53,87,0.3)',
            }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '4px' }}>BEST SELLER</div>
              <div style={{ fontSize: '24px', letterSpacing: '0.05em', color: 'white', marginBottom: '8px' }}>LE MÂLE</div>
              <div style={{ fontSize: '32px', color: 'white', fontWeight: 400, marginBottom: '4px' }}>$165 / 125ML</div>
              <div style={{ margin: '16px 0' }}>
                {[
                  { level: 'high', label: 'HIGH', names: 'Lavender, Mint, Bergamot' },
                  { level: 'medium', label: 'MEDIUM', names: 'Cinnamon, Cumin, Orange Blossom' },
                  { level: 'low', label: 'LOW', names: 'Vanilla, Tonka Bean, Amber' },
                ].map(n => (
                  <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors[n.level], flexShrink: 0 }} />
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>{n.label}:</span>
                    <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'white' }}>{n.names}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['75ML', '125ML'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(p => ({ ...p, 'le-male': s }))} style={{
                    padding: '8px 16px', fontSize: '9px', letterSpacing: '0.15em',
                    border: selectedSize['le-male'] === s ? '1.5px solid rgba(147,197,253,0.6)' : '1px solid rgba(255,255,255,0.2)',
                    background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
                    textTransform: 'uppercase', color: 'white', borderRadius: '2px',
                  }}>
                    {s}
                  </button>
                ))}
              </div>
              <button style={{
                background: 'transparent', color: 'white', width: '100%',
                padding: '14px', fontSize: '10px', letterSpacing: '0.2em',
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'inherit', textTransform: 'uppercase',
              }}>
                ADD TO BAG
              </button>
            </div>

            {/* SCANDAL */}
            <div className="card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '4px' }}>NEW ARRIVAL</div>
              <div style={{ fontSize: '24px', letterSpacing: '0.05em', color: '#0c0c0e', marginBottom: '8px' }}>SCANDAL</div>
              <div style={{ fontSize: '32px', color: '#0c0c0e', fontWeight: 400, marginBottom: '4px' }}>$145 / 80ML</div>
              <div style={{ margin: '16px 0' }}>
                {[
                  { level: 'high', label: 'HIGH', names: 'Blood Orange, Gardenia, Mandarin' },
                  { level: 'medium', label: 'MEDIUM', names: 'Honey, Patchouli, Jasmine' },
                  { level: 'low', label: 'LOW', names: 'Caramel, Chocolate, White Musk' },
                ].map(n => (
                  <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors[n.level], flexShrink: 0 }} />
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(12,12,14,0.6)' }}>{n.label}:</span>
                    <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{n.names}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['30ML', '80ML'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(p => ({ ...p, scandal: s }))} style={{
                    padding: '8px 16px', fontSize: '9px', letterSpacing: '0.15em',
                    border: selectedSize.scandal === s ? '1.5px solid var(--accent)' : '1px solid rgba(12,12,14,0.15)',
                    background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
                    textTransform: 'uppercase', color: '#0c0c0e', borderRadius: '2px',
                  }}>
                    {s}
                  </button>
                ))}
              </div>
              <button style={{
                background: 'transparent', color: 'var(--accent)', width: '100%',
                padding: '14px', fontSize: '10px', letterSpacing: '0.2em',
                border: '1.5px solid var(--accent)', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'inherit', textTransform: 'uppercase',
              }}>
                ADD TO BAG
              </button>
            </div>
          </div>

          {/* PERKS STRIP */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            padding: 'clamp(32px,4vw,48px) clamp(24px,6vw,80px)',
            borderTop: '1px solid rgba(12,12,14,0.07)', gap: '24px',
          }}>
            {[
              { label: 'FREE ENGRAVING', desc: 'Personalise your bottle with a name or message.' },
              { label: 'GIFT WRAPPING', desc: 'Signature packaging for every order.' },
              { label: 'SAMPLE SETS', desc: 'Try before you commit with curated sample sets.' },
              { label: 'GLOBAL SHIPPING', desc: 'Delivered worldwide with care and precision.' },
            ].map(p => (
              <div key={p.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '6px' }}>{p.label}</div>
                <div style={{ fontSize: '10px', lineHeight: 1.6, color: 'rgba(12,12,14,0.5)', textTransform: 'none' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
