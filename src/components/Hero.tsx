export default function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '3rem'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        color: '#fff',
        marginBottom: '1rem',
        lineHeight: 1.2
      }}>
        Find Your Perfect Stay
        <br />
        <span style={{ color: '#FFE66D' }}>At Better Prices</span>
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'rgba(255,255,255,0.9)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: 1.6
      }}>
        Search over 2 million hotels worldwide. Compare deals, read reviews, and book your dream stay — all in one place.
      </p>
      
      {/* Stats */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        marginTop: '2rem',
        flexWrap: 'wrap'
      }}>
        {[
          { value: '2M+', label: 'Hotels' },
          { value: '150+', label: 'Countries' },
          { value: '10M+', label: 'Happy Guests' }
        ].map((stat, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#FFE66D'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.8)'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
