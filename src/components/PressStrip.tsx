export default function PressStrip() {
  const pressNames = ['VOGUE', "HARPER'S BAZAAR", 'ELLE', 'GQ', 'FINANCIAL TIMES HOW TO SPEND IT']

  return (
    <section style={{
      borderTop: '1px solid rgba(12,12,14,0.07)',
      borderBottom: '1px solid rgba(12,12,14,0.07)',
      padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)',
    }}>
      <div style={{
        fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(12,12,14,0.3)',
        marginBottom: '20px', textAlign: 'center',
      }}>
        AS FEATURED IN
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        alignItems: 'center', gap: '16px 32px',
      }}>
        {pressNames.map((name, i) => (
          <span key={name} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
              {name}
            </span>
            {i < pressNames.length - 1 && (
              <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
