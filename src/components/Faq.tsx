import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const faqs = [
  {
    q: 'HOW DO I CHOOSE THE RIGHT FRAGRANCE?',
    a: 'Begin by identifying the note families that resonate with you — floral, oriental, woody, or fresh. Our private consultation service can guide you through a curated selection based on your personal preferences, lifestyle, and the occasions you envision.',
  },
  {
    q: 'WHAT ARE HIGH, MEDIUM, AND LOW NOTES?',
    a: 'High notes (top) are the first impression — light, volatile, and fleeting. Medium notes (heart) form the character of the fragrance. Low notes (base) provide depth and longevity, lingering on the skin for hours after application.',
  },
  {
    q: 'CAN I PURCHASE GIFT SETS?',
    a: 'Yes. We offer curated gift sets featuring our iconic fragrances in complementary combinations. Each set is presented in signature packaging with the option of engraving and bespoke wrapping.',
  },
  {
    q: 'IS JPG AVAILABLE INTERNATIONALLY?',
    a: 'JPG is available in over 80 countries through our network of authorised retailers and boutiques. Global shipping is also available through our concierge service.',
  },
  {
    q: 'HOW DO I BOOK A PRIVATE CONSULTATION?',
    a: 'Private consultations are available online and in select boutiques worldwide. Submit a request through our consultation form, and a dedicated advisor will arrange a session at your convenience.',
  },
  {
    q: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
    a: 'Our concierge handles every detail — gifting, engraving, personal shopping, and global delivery. Whether selecting a signature scent or arranging a bespoke presentation, the service is designed for those who expect perfection.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>FAQ</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em' }}>
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      {/* FAQ ITEMS */}
      {faqs.map((faq, i) => (
        <div key={i}>
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              display: 'flex', justifyContent: 'space-between', cursor: 'pointer',
              padding: '24px 0', borderBottom: '1px solid rgba(12,12,14,0.08)',
              alignItems: 'center',
            }}
          >
            <span style={{
              fontSize: '12px', letterSpacing: '0.12em',
              color: openIndex === i ? '#0c0c0e' : 'rgba(12,12,14,0.6)',
              transition: 'color 0.3s ease',
            }}>
              {faq.q}
            </span>
            <span style={{
              transition: 'transform 0.4s ease',
              transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
              fontSize: '14px', color: 'rgba(12,12,14,0.4)',
            }}>
              ↓
            </span>
          </div>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  fontSize: '10px', lineHeight: 1.9, letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)', padding: '0 0 24px',
                }}>
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  )
}
