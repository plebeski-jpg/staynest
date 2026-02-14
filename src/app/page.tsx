'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import HotelCard from '@/components/HotelCard'
import Footer from '@/components/Footer'
import { demoHotels } from '@/data/hotels'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1000)
  }

  const filteredHotels = demoHotels.filter(hotel => 
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1A535C 0%, #2A737C 50%, #1A535C 100%)',
        padding: '4rem 1rem 6rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Hero />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
            guests={guests}
            setGuests={setGuests}
            onSearch={handleSearch}
            isLoading={isSearching}
          />
        </div>
      </section>

      {/* Featured Hotels (Always Visible) */}
      {!showResults && (
        <section style={{ padding: '4rem 1rem', background: '#FAFAFA' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1A535C',
              marginBottom: '0.5rem',
              textAlign: 'center'
            }}>
              Popular Destinations
            </h2>
            <p style={{
              color: '#636E72',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Discover amazing hotels at unbeatable prices
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {demoHotels.slice(0, 6).map((hotel, index) => (
                <div key={hotel.id} style={{
                  animationDelay: `${index * 0.1}s`
                }} className="animate-fade-in-up">
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search Results */}
      {showResults && (
        <section style={{ padding: '3rem 1rem', background: '#FAFAFA' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#1A535C'
                }}>
                  {filteredHotels.length} Hotels Found
                </h2>
                {searchQuery && (
                  <p style={{ color: '#636E72', marginTop: '0.25rem' }}>
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowResults(false)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  border: '1px solid #FF6B4A',
                  color: '#FF6B4A',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Clear Search
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {filteredHotels.map((hotel, index) => (
                <div key={hotel.id} style={{
                  animationDelay: `${index * 0.05}s`
                }} className="animate-fade-in-up">
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>

            {filteredHotels.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid #E0E0E0'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ color: '#1A535C', marginBottom: '0.5rem' }}>No hotels found</h3>
                <p style={{ color: '#636E72' }}>Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section style={{ padding: '4rem 1rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1A535C',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Why Choose StayNest?
          </h2>
          <p style={{
            color: '#636E72',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            We make finding your perfect stay simple and affordable
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🏠', title: '2M+ Hotels', desc: 'Access to over 2 million properties worldwide' },
              { icon: '💰', title: 'Best Prices', desc: 'We guarantee the lowest rates available' },
              { icon: '🔒', title: 'Secure Booking', desc: 'Your payment information is always protected' },
              { icon: '📞', title: '24/7 Support', desc: 'We\'re here to help whenever you need us' }
            ].map((feature, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#FAFAFA',
                borderRadius: '16px',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A535C',
                  marginBottom: '0.5rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#636E72', fontSize: '0.95rem' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
