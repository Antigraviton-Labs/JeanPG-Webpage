import { motion } from 'motion/react'
import { fragrances } from '../data/fragrances'

const dotColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

const products = [
  {
    name: 'CLASSIQUE',
    tier: 'EAU DE PARFUM',
    price: '$185',
    size: '100ML',
    cardClass: 'card',
    priceColor: '#0c0c0e',
    badge: null,
    notes: [
      { level: 'high', label: 'HIGH', names: 'ROSE, RICE POWDER' },
      { level: 'medium', label: 'MEDIUM', names: 'ORANGE BLOSSOM, GINGER' },
      { level: 'low', label: 'LOW', names: 'VANILLA, MUSK' },
    ],
    delay: 0,
  },
  {
    name: 'LE MÂLE',
    tier: 'BEST SELLER',
    price: '$165',
    size: '125ML',
    cardClass: 'card-accent',
    priceColor: 'var(--accent)',
    badge: 'BEST SELLER',
    notes: [
      { level: 'high', label: 'HIGH', names: 'LAVENDER, MINT' },
      { level: 'medium', label: 'MEDIUM', names: 'CINNAMON, CUMIN' },
      { level: 'low', label: 'LOW', names: 'VANILLA, TONKA BEAN' },
    ],
    delay: 0.08,
  },
  {
    name: 'SCANDAL',
    tier: 'NEW ARRIVAL',
    price: '$145',
    size: '80ML',
    cardClass: 'card',
    priceColor: '#0c0c0e',
    badge: null,
    notes: [
      { level: 'high', label: 'HIGH', names: 'BLOOD ORANGE, GARDENIA' },
      { level: 'medium', label: 'MEDIUM', names: 'HONEY, PATCHOULI' },
      { level: 'low', label: 'LOW', names: 'CARAMEL, CHOCOLATE' },
    ],
    delay: 0.16,
  },
]

export default function Shop() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>SHOP</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em' }}>
          SELECT YOUR FRAGRANCE.
        </h2>
      </div>

      {/* 2-COLUMN GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        {/* LEFT — 3 PRODUCT CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {products.map((p) => (
            <motion.div
              key={p.name}
              className={p.cardClass}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '32px' }}
            >
              {p.badge && (
                <div style={{
                  background: 'var(--accent)', color: 'white', fontSize: '8px',
                  letterSpacing: '0.3em', padding: '4px 12px', borderRadius: '2px',
                  display: 'inline-block', marginBottom: '16px',
                }}>
                  {p.badge}
                </div>
              )}
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '4px' }}>
                {p.tier}
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '8px' }}>
                {p.name}
              </div>
              <div style={{ fontSize: '40px', color: p.priceColor, fontWeight: 400, marginBottom: '4px' }}>
                {p.price}
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(12,12,14,0.4)', marginBottom: '16px' }}>
                {p.size}
              </div>

              {/* NOTE SUMMARY */}
              {p.notes.map((n) => (
                <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColors[n.level], flexShrink: 0 }} />
                  <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(12,12,14,0.6)' }}>{n.label}:</span>
                  <span style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>{n.names}</span>
                </div>
              ))}

              <button style={{
                background: 'var(--accent)', color: 'white', width: '100%',
                padding: '12px', fontSize: '9px', letterSpacing: '0.2em',
                border: 'none', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'inherit', textTransform: 'uppercase', marginTop: '16px',
              }}>
                ADD TO BAG
              </button>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — STICKY VIDEO PANEL */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <div style={{ position: 'relative' }}>
            <video
              src="/videos/collection-classique.mp4"
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }}
            />
            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)',
            }} />
            {/* Floating text */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px' }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '8px' }}>
                CLASSIQUE — EAU DE PARFUM
              </div>
              <div style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '280px' }}>
                THE FRAGRANCE THAT STARTED IT ALL. A TIMELESS EMBRACE OF ROSE AND VANILLA.
              </div>
              <button className="glass-mid" style={{
                marginTop: '20px', padding: '12px 28px', color: 'white',
                fontSize: '9px', letterSpacing: '0.2em', border: 'none',
                cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase',
              }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
