import { motion } from 'motion/react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) 0' }}>
      {/* SECTION HEADER */}
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>CONNOISSEUR VOICES</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em' }}>
          THOSE WHO KNOW.
        </h2>
      </div>

      {/* HORIZONTAL SCROLL RAIL */}
      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory',
          gap: '20px', paddingLeft: 'clamp(24px,6vw,96px)', paddingRight: 'clamp(24px,6vw,96px)',
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{ flexShrink: 0, width: 'clamp(280px,30vw,380px)', padding: '36px' }}
          >
            <div style={{ fontStyle: 'italic', fontSize: '12px', lineHeight: 1.9, color: 'rgba(12,12,14,0.7)', marginBottom: '28px' }}>
              "{t.quote}"
            </div>
            <div style={{ width: '24px', height: '1px', background: 'var(--accent)', marginBottom: '20px' }} />
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: '4px' }}>
              {t.name}
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)' }}>
              {t.role} · {t.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
