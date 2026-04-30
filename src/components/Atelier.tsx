import { motion } from 'motion/react'
import { useState } from 'react'

const modules = [
  { num: '01', title: 'EXTRACTION METHODS', desc: 'Master the art of extracting pure essences from natural ingredients.', pct: 75 },
  { num: '02', title: 'BLENDING TECHNIQUES', desc: 'Learn the precise ratios and methods used by master perfumers.', pct: 60 },
  { num: '03', title: 'NOTE COMPOSITION', desc: 'Understand how top, heart, and base notes form a harmonious whole.', pct: 85 },
  { num: '04', title: 'CONCENTRATION LEVELS', desc: 'Explore the differences between Eau de Toilette, Parfum, and Extrait.', pct: 50 },
  { num: '05', title: 'MACERATION PROCESS', desc: 'The patience behind perfection — how fragrances mature over time.', pct: 40 },
  { num: '06', title: 'ART OF APPLICATION', desc: 'The ritual of wearing fragrance — pulse points, layering, and longevity.', pct: 70 },
]

export default function Atelier() {
  const [progressWidths, setProgressWidths] = useState<Record<number, string>>({})

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* VIDEO — NO OVERLAY */}
      <video
        src="/videos/collection-le-male.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
        {/* HEADER */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '16px' }}>
            JPG ATELIER
          </div>
          <h2 style={{
            fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.9,
            color: 'white', maxWidth: '600px',
          }}>
            MASTER THE<br />CRAFT.<br /><em>MASTER<br />YOURSELF.</em>
          </h2>
        </div>

        {/* MODULE GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '48px' }}>
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              className="glass-mid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '28px 28px 24px', borderRadius: '4px' }}
              onViewportEnter={() => {
                setProgressWidths(prev => ({ ...prev, [i]: `${mod.pct}%` }))
              }}
            >
              <div style={{ fontSize: '64px', color: 'rgba(255,255,255,0.08)', lineHeight: 1, marginBottom: '-8px' }}>
                {mod.num}
              </div>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.6)', marginBottom: '10px' }}>
                MODULE
              </div>
              <div style={{ fontSize: '13px', letterSpacing: '0.12em', color: 'white', marginBottom: '8px' }}>
                {mod.title}
              </div>
              <div style={{ fontSize: '9px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
                {mod.desc}
              </div>
              {/* PROGRESS BAR */}
              <div style={{ marginTop: '16px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '1px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: '1px',
                  background: 'var(--accent)',
                  width: progressWidths[i] || '0%',
                  transition: `width 1.2s cubic-bezier(0.19,1,0.22,1) ${i * 0.1}s`,
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
