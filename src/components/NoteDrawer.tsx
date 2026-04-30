import { AnimatePresence, motion } from 'motion/react'
import { fragrances } from '../data/fragrances'

const dotColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

interface NoteDrawerProps {
  fragranceId: string | null
  onClose: () => void
}

export default function NoteDrawer({ fragranceId, onClose }: NoteDrawerProps) {
  const fragrance = fragrances.find(f => f.id === fragranceId) || null

  return (
    <>
      <AnimatePresence>
        {fragrance && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              style={{ position: 'fixed', inset: 0, zIndex: 199, background: 'rgba(0,0,0,0.4)' }}
            />
            {/* DRAWER */}
            <motion.div
              key="drawer"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="note-drawer"
              style={{
                position: 'fixed', top: 0, right: 0, width: '440px', height: '100vh',
                zIndex: 200, overflowY: 'auto',
              }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute', top: '20px', right: '20px',
                  background: 'none', border: '1px solid rgba(12,12,14,0.15)',
                  borderRadius: '2px', padding: '8px 12px',
                  cursor: 'pointer', fontSize: '14px', color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              >
                ×
              </button>

              <div style={{ padding: '40px' }}>
                <h3 style={{
                  fontSize: '24px', letterSpacing: '0.05em', color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {fragrance.name}
                </h3>
                <p style={{
                  fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)',
                  marginBottom: '32px',
                }}>
                  {fragrance.tagline}
                </p>

                {fragrance.fullNotes.map((category) => (
                  <div key={category.category}>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)',
                      marginBottom: '16px', marginTop: '32px',
                    }}>
                      {category.category}
                    </div>
                    {category.notes.map((note) => (
                      <div key={note.label} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        marginBottom: '10px',
                      }}>
                        <div style={{
                          width: '8px', height: '8px', borderRadius: '50%',
                          background: dotColors[note.level],
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: '12px', letterSpacing: '0.1em', color: 'var(--text-primary)',
                        }}>
                          {note.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
