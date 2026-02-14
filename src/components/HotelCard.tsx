'use client'

import { useState } from 'react'

interface Hotel {
  id: number
  name: string
  location: string
  image: string
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  amenities: string[]
}

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: '#FFE66D' }}>★</span>)
    }
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ color: '#FFE66D' }}>★</span>)
    }
    return stars
  }

  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
    }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        height: '200px',
        background: '#f0f0f0'
      }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }} />
        )}
        <img
          src={hotel.image}
          alt={hotel.name}
          onLoad={() => setImageLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: imageLoaded ? 'block' : 'none'
          }}
        />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            transition: 'transform 0.2s'
          }}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>

        {/* Discount Badge */}
        {hotel.originalPrice && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '4px 10px',
            background: '#FF6B4A',
            color: '#fff',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600
          }}>
            {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1rem' }}>
        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.8rem',
          color: '#636E72',
          marginBottom: '0.5rem'
        }}>
          📍 {hotel.location}
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#2D3436',
          marginBottom: '0.5rem',
          lineHeight: 1.3
        }}>
          {hotel.name}
        </h3>

        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            fontSize: '0.9rem'
          }}>
            {renderStars(hotel.rating)}
          </div>
          <span style={{
            fontSize: '0.85rem',
            color: '#636E72'
          }}>
            ({hotel.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Amenities */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {hotel.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              style={{
                padding: '4px 8px',
                background: '#F5F5F5',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#636E72'
              }}
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1A535C'
          }}>
            ${hotel.price}
          </span>
          <span style={{
            fontSize: '0.85rem',
            color: '#636E72'
          }}>
            / night
          </span>
          {hotel.originalPrice && (
            <span style={{
              fontSize: '0.9rem',
              color: '#B2BEC3',
              textDecoration: 'line-through'
            }}>
              ${hotel.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
