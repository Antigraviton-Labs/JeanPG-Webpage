import { motion } from 'motion/react'

export default function BrandManifesto() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* BACKGROUND IMAGE */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/product-1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,20,0.4)' }} />

      {/* CONTENT */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        minHeight: '100vh',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{ maxWidth: '520px', padding: 'clamp(36px,4vw,56px)', borderRadius: '4px', textAlign: 'left' }}
        >
          {/* EYEBROW */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              THE JPG PHILOSOPHY
            </span>
          </div>

          {/* H2 */}
          <h2 style={{
            fontSize: 'clamp(32px,4vw,64px)', fontWeight: 400, lineHeight: 0.95,
            letterSpacing: '-0.01em', color: 'white', marginBottom: '32px',
          }}>
            PRIVATE CRAFT.<br /><em>OPEN SENSATION.</em>
          </h2>

          {/* PARAGRAPH */}
          <p style={{
            fontSize: '11px', lineHeight: 1.9, letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.6)',
          }}>
            WE CURATE FRAGRANCES FOR THOSE WHO EXPECT ELEGANCE, INTENSITY, AND PRECISION IN EVERY NOTE.
            SINCE 1976, THOSE WHO DEMAND THE FINEST HAVE TRUSTED ONE NAME.
          </p>

          {/* BUTTON */}
          <button
            style={{
              marginTop: '40px', padding: '14px 36px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2px', backdropFilter: 'blur(8px)',
              color: 'white', fontSize: '10px', letterSpacing: '0.25em',
              cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'uppercase',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
          >
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  )
}
