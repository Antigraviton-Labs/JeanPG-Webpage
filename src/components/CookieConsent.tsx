import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="glass-mid"
          style={{
            position: 'fixed', bottom: '24px', left: '24px', zIndex: 999,
            borderRadius: '4px', padding: '20px 24px', maxWidth: '320px',
          }}
        >
          <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
            THIS SITE USES COOKIES TO IMPROVE YOUR EXPERIENCE.
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'var(--accent)', color: 'white', fontSize: '8px',
                padding: '8px 16px', borderRadius: '2px', border: 'none',
                cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase',
              }}
            >
              ACCEPT
            </button>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'transparent', color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.2)', fontSize: '8px',
                padding: '8px 16px', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'inherit', textTransform: 'uppercase',
              }}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
