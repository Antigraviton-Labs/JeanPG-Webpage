import { motion } from 'motion/react'

interface CollectionVideoProps {
  videoSrc: string
  name: string
  notes: { label: string; value: string; level: string }[]
  delay: number
  isOpen: boolean
  dotColors: Record<string, string>
}

export default function CollectionVideo({ videoSrc, name, notes, delay, isOpen, dotColors }: CollectionVideoProps) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9 + delay, ease: [0.19, 1, 0.22, 1] }}
      style={{
        width: '33.333%', height: '100%', position: 'relative',
        overflow: 'hidden', flexShrink: 0,
      }}
    >
      <video
        src={videoSrc}
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Dark gradient bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
      }} />

      {/* Info block */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px' }}>
        <div style={{
          fontSize: 'clamp(28px,2.5vw,44px)', color: 'white',
          letterSpacing: '-0.01em', marginBottom: '20px',
        }}>
          {name}
        </div>

        {/* 2×2 NOTE GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
          {notes.map((note) => (
            <div key={note.label}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: dotColors[note.level] || 'var(--note-medium)',
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.3em' }}>
                  {note.label}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'white', letterSpacing: '0.1em' }}>
                {note.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
