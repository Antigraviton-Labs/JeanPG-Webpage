import { motion } from 'motion/react'

const cards = [
  {
    category: 'PRIVATE BLEND',
    title: 'BESPOKE FRAGRANCE',
    description: 'Commission a signature scent crafted exclusively for you by our master perfumers. From initial consultation to final bottle, every detail is yours to define.',
  },
  {
    category: 'LIMITED EDITIONS',
    title: 'SEASONAL DROPS',
    description: 'Exclusive seasonal releases and collector editions available only to our inner circle. Rare concentrations, unique presentations, unforgettable moments.',
  },
  {
    category: 'CONCIERGE',
    title: '24 / 7 ACCESS',
    description: 'Every detail handled — gifting, engraving, personal shopping, and global delivery. A private service for those who expect nothing less.',
  },
]

export default function Experiences() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* BACKGROUND IMAGE */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bottle-reflective.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,20,0.55)' }} />

      {/* CONTENT GRID */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        gap: '80px', alignContent: 'center',
      }}>
        {/* LEFT COLUMN */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              CURATED FOR CONNOISSEURS
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(36px,4.5vw,72px)', fontWeight: 400, lineHeight: 0.95, color: 'white',
          }}>
            LIFE BEYOND<br />THE ORDINARY
          </h2>
        </div>

        {/* RIGHT COLUMN — 3 glass-card panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.category}
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '24px 28px' }}
            >
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.7)', marginBottom: '8px' }}>
                {card.category}
              </div>
              <div style={{ fontSize: '18px', color: 'white', letterSpacing: '0.05em', marginBottom: '12px' }}>
                {card.title}
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)' }}>
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
