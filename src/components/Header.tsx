'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #E0E0E0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FF8A70 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem'
          }}>
            🏨
          </div>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1A535C'
          }}>
            Stay<span style={{ color: '#FF6B4A' }}>Nest</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          gap: '2rem',
          alignItems: 'center',
        }} className="desktop-nav">
          <a href="#" style={{
            color: '#2D3436',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#FF6B4A'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2D3436'}
          >
            Hotels
          </a>
          <a href="#" style={{
            color: '#2D3436',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#FF6B4A'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2D3436'}
          >
            Destinations
          </a>
          <a href="#" style={{
            color: '#2D3436',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#FF6B4A'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2D3436'}
          >
            Deals
          </a>
          <a href="#" style={{
            color: '#2D3436',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#FF6B4A'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2D3436'}
          >
            Support
          </a>
        </nav>

        {/* CTA Buttons */}
        <div style={{
          display: 'none',
          gap: '1rem',
          alignItems: 'center',
        }} className="desktop-nav">
          <button style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            border: '2px solid #1A535C',
            color: '#1A535C',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.2s'
          }}>
            Sign In
          </button>
          <button style={{
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, #FF6B4A 0%, #E55A3A 100%)',
            border: 'none',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'transform 0.2s'
          }}>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid #E0E0E0',
          padding: '1rem'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#" style={{ color: '#2D3436', textDecoration: 'none', fontWeight: 500, padding: '0.5rem' }}>Hotels</a>
            <a href="#" style={{ color: '#2D3436', textDecoration: 'none', fontWeight: 500, padding: '0.5rem' }}>Destinations</a>
            <a href="#" style={{ color: '#2D3436', textDecoration: 'none', fontWeight: 500, padding: '0.5rem' }}>Deals</a>
            <a href="#" style={{ color: '#2D3436', textDecoration: 'none', fontWeight: 500, padding: '0.5rem' }}>Support</a>
            <hr style={{ border: 'none', borderTop: '1px solid #E0E0E0', margin: '0.5rem 0' }} />
            <button style={{
              padding: '0.75rem',
              background: 'linear-gradient(135deg, #FF6B4A 0%, #E55A3A 100%)',
              border: 'none',
              color: '#fff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}>
              Get Started
            </button>
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}
