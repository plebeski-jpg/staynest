export default function Footer() {
  return (
    <footer style={{
      background: '#1A535C',
      color: '#fff',
      padding: '4rem 1rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #FF6B4A 0%, #FF8A70 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem'
              }}>
                🏨
              </div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff'
              }}>
                Stay<span style={{ color: '#FFE66D' }}>Nest</span>
              </span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              Find your perfect stay at better prices. Over 2 million hotels worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#FFE66D'
            }}>
              Quick Links
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {['Hotels', 'Destinations', 'Deals', 'About Us', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#FFE66D'
            }}>
              Support
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {['Help Center', 'Cancellation Policy', 'Privacy Policy', 'Terms of Service', 'FAQs'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#FFE66D'
            }}>
              Get Deals
            </h4>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              marginBottom: '1rem'
            }}>
              Subscribe for exclusive deals
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button style={{
                padding: '0.75rem 1rem',
                background: '#FF6B4A',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.85rem'
          }}>
            © 2025 StayNest. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {['📘', '🐦', '📸', '💼'].map((icon, index) => (
              <a
                key={index}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
