import { useState } from 'react'
import { motion } from 'motion/react'
import { fragrances } from '../data/fragrances'
import NoteDrawer from './NoteDrawer'

const noteBarWidths: Record<string, string> = {
  high: '100%',
  medium: '65%',
  low: '40%',
}

const noteBarColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

export default function FragranceNotes() {
  const [selectedFragrance, setSelectedFragrance] = useState<string | null>(null)

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>THE COLLECTION</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em' }}>
          THREE ICONIC FRAGRANCES.<br />ONE STANDARD.
        </h2>
      </div>

      {/* 3-COLUMN GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {fragrances.map((fragrance, i) => {
          const highNotes = fragrance.quickNotes.find(n => n.label === 'HIGH')
          const medNotes = fragrance.quickNotes.find(n => n.label === 'MEDIUM')
          const lowNotes = fragrance.quickNotes.find(n => n.label === 'LOW')

          return (
            <motion.div
              key={fragrance.id}
              className="fragrance-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', border: '1px solid rgba(12,12,14,0.06)', background: 'white' }}
            >
              {/* VIDEO PORTION */}
              <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative' }}>
                <video
                  className="fragrance-card-video"
                  src={`/videos/collection-${fragrance.id}.mp4`}
                  autoPlay loop muted playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s var(--ease-luxury)' }}
                />
                {/* Bottom gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                }} />
                {/* Tag badge */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)',
                  borderRadius: '100px', padding: '6px 14px',
                  fontSize: '8px', letterSpacing: '0.3em', color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  {fragrance.quickNotes[4]?.value}
                </div>
                {/* Fragrance info */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                    {fragrance.tagline}
                  </div>
                  <div style={{ fontSize: '17px', letterSpacing: '0.08em', color: 'white' }}>
                    {fragrance.name}
                  </div>
                </div>
              </div>

              {/* INFO PANEL */}
              <div style={{ background: 'white', padding: '24px 24px 28px' }}>
                {/* NOTE PYRAMID */}
                <div style={{ marginBottom: '20px' }}>
                  {[
                    { label: 'HIGH', notes: highNotes, level: 'high' },
                    { label: 'MEDIUM', notes: medNotes, level: 'medium' },
                    { label: 'LOW', notes: lowNotes, level: 'low' },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: '8px' }}>
                      <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)', marginBottom: '2px' }}>
                        {row.label}
                      </div>
                      <div style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 400 }}>
                        {row.notes?.value}
                      </div>
                      <div style={{
                        height: '3px', borderRadius: '2px', marginTop: '4px',
                        width: noteBarWidths[row.level],
                        background: noteBarColors[row.level],
                      }} />
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setSelectedFragrance(fragrance.id)}
                    style={{
                      background: 'var(--accent)', color: 'white',
                      padding: '10px 0', flex: 1, fontSize: '9px', letterSpacing: '0.2em',
                      borderRadius: '2px', border: 'none', cursor: 'pointer',
                      fontFamily: 'inherit', textTransform: 'uppercase',
                    }}
                  >
                    FULL NOTES
                  </button>
                  <button
                    style={{
                      background: 'transparent', border: '1px solid rgba(12,12,14,0.5)',
                      color: 'rgba(12,12,14,0.5)', padding: '10px 0', flex: 1,
                      fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px',
                      cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase',
                    }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* COMPARE BUTTON */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button style={{
          background: 'var(--accent)', color: 'white',
          padding: '14px 40px', fontSize: '10px', letterSpacing: '0.22em',
          borderRadius: '2px', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', textTransform: 'uppercase',
        }}>
          COMPARE ALL THREE
        </button>
      </div>

      <NoteDrawer fragranceId={selectedFragrance} onClose={() => setSelectedFragrance(null)} />
    </section>
  )
}
