import { AnimatePresence, motion } from 'motion/react'
import CollectionVideo from './CollectionVideo'

interface CollectionOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const collections = [
  {
    name: 'CLASSIQUE',
    videoSrc: '/videos/collection-classique.mp4',
    delay: 0,
    notes: [
      { label: 'HIGH', value: 'ROSE & RICE POWDER', level: 'high' },
      { label: 'MEDIUM', value: 'ORANGE BLOSSOM & GINGER', level: 'medium' },
      { label: 'LOW', value: 'VANILLA & MUSK', level: 'low' },
      { label: 'CONCENTRATION', value: 'EAU DE PARFUM', level: 'medium' },
    ],
  },
  {
    name: 'LE MÂLE',
    videoSrc: '/videos/collection-le-male.mp4',
    delay: 0.12,
    notes: [
      { label: 'HIGH', value: 'LAVENDER & MINT', level: 'high' },
      { label: 'MEDIUM', value: 'CINNAMON & CUMIN', level: 'medium' },
      { label: 'LOW', value: 'VANILLA & TONKA BEAN', level: 'low' },
      { label: 'CONCENTRATION', value: 'EAU DE TOILETTE INTENSE', level: 'medium' },
    ],
  },
  {
    name: 'SCANDAL',
    videoSrc: '/videos/collection-scandal.mp4',
    delay: 0.24,
    notes: [
      { label: 'HIGH', value: 'BLOOD ORANGE & GARDENIA', level: 'high' },
      { label: 'MEDIUM', value: 'HONEY & PATCHOULI', level: 'medium' },
      { label: 'LOW', value: 'CARAMEL & CHOCOLATE', level: 'low' },
      { label: 'CONCENTRATION', value: 'EAU DE PARFUM', level: 'medium' },
    ],
  },
]

const dotColors: Record<string, string> = {
  high: 'var(--note-high)',
  medium: 'var(--note-medium)',
  low: 'var(--note-low)',
}

export default function CollectionOverlay({ isOpen, onClose }: CollectionOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 110,
            display: 'flex', flexDirection: 'row',
          }}
        >
          {collections.map((col) => (
            <CollectionVideo
              key={col.name}
              videoSrc={col.videoSrc}
              name={col.name}
              notes={col.notes}
              delay={col.delay}
              isOpen={isOpen}
              dotColors={dotColors}
            />
          ))}

          {/* CLOSE BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            style={{
              position: 'fixed', top: '32px', right: '32px', zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px',
              padding: '12px 28px', color: 'white', background: 'transparent',
              fontSize: '10px', letterSpacing: '0.22em', cursor: 'pointer',
              fontFamily: 'var(--font-serif)', textTransform: 'uppercase',
            }}
          >
            × CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
