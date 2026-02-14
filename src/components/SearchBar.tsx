'use client'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  checkIn: string
  setCheckIn: (date: string) => void
  checkOut: string
  setCheckOut: (date: string) => void
  guests: number
  setGuests: (guests: number) => void
  onSearch: () => void
  isLoading: boolean
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  onSearch,
  isLoading
}: SearchBarProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        alignItems: 'end'
      }}>
        {/* Destination */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#636E72',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Where to?
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem'
            }}>
              📍
            </span>
            <input
              type="text"
              placeholder="City, hotel, or destination"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                border: '2px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF6B4A'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#636E72',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Check-in
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem'
            }}>
              📅
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                border: '2px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF6B4A'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#636E72',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Check-out
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem'
            }}>
              📅
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                border: '2px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF6B4A'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#636E72',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Guests
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem'
            }}>
              👥
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                border: '2px solid #E0E0E0',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                cursor: 'pointer',
                background: '#fff',
                appearance: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF6B4A'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div>
          <button
            onClick={onSearch}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              background: isLoading 
                ? '#B2BEC3' 
                : 'linear-gradient(135deg, #FF6B4A 0%, #E55A3A 100%)',
              border: 'none',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {isLoading ? (
              <>
                <span style={{
                  display: 'inline-block',
                  animation: 'spin 1s linear infinite'
                }}>⏳</span>
                Searching...
              </>
            ) : (
              <>
                🔍 Search Hotels
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
