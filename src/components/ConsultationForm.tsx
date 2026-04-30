import { motion } from 'motion/react'

export default function ConsultationForm() {
  const inputStyle: React.CSSProperties = {
    background: 'rgba(12,12,14,0.04)', border: '1px solid rgba(12,12,14,0.1)',
    color: '#0c0c0e', fontSize: '11px', letterSpacing: '0.12em',
    padding: '14px 16px', borderRadius: '2px', width: '100%',
    fontFamily: 'var(--font-serif)', textTransform: 'uppercase',
  }
  const labelStyle: React.CSSProperties = {
    fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)',
    marginBottom: '6px', display: 'block',
  }

  return (
    <section style={{ background: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* CENTERED HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>PRIVATE CONSULTATION</span>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.95, color: '#0c0c0e', letterSpacing: '-0.01em' }}>
          BOOK A<br />MOMENT.
        </h2>
      </div>

      {/* FORM CARD */}
      <div style={{
        maxWidth: '720px', margin: '0 auto', background: 'white',
        border: '1px solid rgba(12,12,14,0.06)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.06)', borderRadius: '4px',
        padding: 'clamp(32px,5vw,56px)',
      }}>
        {/* ROW 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>FULL NAME</label>
            <input style={inputStyle} placeholder="YOUR NAME" />
          </div>
          <div>
            <label style={labelStyle}>EMAIL ADDRESS</label>
            <input style={inputStyle} type="email" placeholder="EMAIL" />
          </div>
        </div>

        {/* ROW 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>PHONE NUMBER</label>
            <input style={inputStyle} type="tel" placeholder="PHONE" />
          </div>
          <div>
            <label style={labelStyle}>PREFERRED FRAGRANCE</label>
            <select style={inputStyle}>
              <option>CLASSIQUE</option>
              <option>LE MÂLE</option>
              <option>SCANDAL</option>
              <option>NO PREFERENCE</option>
            </select>
          </div>
        </div>

        {/* PREFERRED NOTE FAMILY */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>PREFERRED NOTE FAMILY</label>
          <select style={inputStyle}>
            <option>FLORAL</option>
            <option>ORIENTAL</option>
            <option>WOODY</option>
            <option>FRESH</option>
            <option>NO PREFERENCE</option>
          </select>
        </div>

        {/* PREFERRED CONCENTRATION */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>PREFERRED CONCENTRATION</label>
          <select style={inputStyle}>
            <option>EAU DE TOILETTE</option>
            <option>EAU DE PARFUM</option>
            <option>EXTRAIT DE PARFUM</option>
            <option>UNSURE</option>
          </select>
        </div>

        {/* ADDITIONAL REQUESTS */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>ADDITIONAL REQUESTS</label>
          <textarea rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Share any particular scent preferences or sensitivities..." />
        </div>

        {/* SUBMIT */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          style={{
            width: '100%', background: 'var(--accent)', color: 'white',
            padding: '16px', fontSize: '10px', letterSpacing: '0.25em',
            borderRadius: '2px', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', textTransform: 'uppercase', marginTop: '8px',
          }}
        >
          SUBMIT REQUEST
        </motion.button>

        {/* CONFIDENTIALITY NOTE */}
        <div style={{
          fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.35)',
          textAlign: 'center', marginTop: '16px',
        }}>
          ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
        </div>
      </div>
    </section>
  )
}
