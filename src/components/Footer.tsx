export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
      {/* VIDEO */}
      <video
        src="/videos/collection-scandal.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* OVERLAY */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)',
      }} />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '80px' }}>
          {/* COL 1 — LOGO */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="5" r="2.4" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M5 10 Q10 4 15 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M7 14 Q10 8 13 14" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="10" y1="14" x2="10" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: '20px', letterSpacing: '0.28em', color: 'white' }}>JPG</span>
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>
              SINCE 1976. THE SCENT IS YOURS.
            </div>
          </div>

          {/* COL 2 — NAVIGATION */}
          <div>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.7)', marginBottom: '20px' }}>
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['FAMILIES', 'COLLECTION', 'SHOP', 'ATELIER', 'JOURNAL'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none', transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* COL 3 — SERVICES */}
          <div>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.7)', marginBottom: '20px' }}>
              SERVICES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['PRIVATE BLEND', 'GIFT SETS', 'ENGRAVING', 'CONCIERGE', 'PRESS & MEDIA'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none', transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div style={{
          marginTop: '64px', paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
            © 2025 JEAN PAUL GAULTIER. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['PRIVACY POLICY', 'TERMS'].map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none', transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
