import React from 'react'

const starStyle: React.CSSProperties = {
  color: '#559BED',
  padding: 0,
  zIndex: 0,
  fontSize: '25px',
}

const partialStarStyle: React.CSSProperties = {
  color: '#559BED',
  padding: 0,
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  overflow: 'hidden',
  fontSize: '25px',
}

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Array(Math.floor(rating)).fill('★')
  const hasPartialStar = rating % 1 !== 0
  const emptyStars = Array(5 - Math.ceil(rating)).fill('☆')

  const ratingPercent = (value: number, total: number) => {
    return (value / total) * 100 + '%'
  }

  return (
    <React.Fragment>
      <figure style={{ display: 'flex', gap: '5px' }}>
        {fullStars.map((star, index) => (
          <div key={index} style={starStyle}>
            {star}
          </div>
        ))}
        {hasPartialStar && (
          <div
            style={{
              margin: 'auto 0',
              position: 'relative',
              display: 'inline-block',
              padding: 0,
            }}
          >
            <div
              style={{
                ...partialStarStyle,
                width: ratingPercent(rating % 1, 1),
              }}
            >
              ★
            </div>
            <div style={{ ...starStyle, zIndex: 0 }}>☆</div>
          </div>
        )}
        {emptyStars.map((star, index) => (
          <div key={index} style={starStyle}>
            {star}
          </div>
        ))}
      </figure>
    </React.Fragment>
  )
}