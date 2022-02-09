import React from 'react'

const Card = ({ src, handleCardClick }) => {
  return (
    <div className='card'>
      <img className='card-img' src={src} alt={src} onClick={handleCardClick} />
    </div>
  )
}

export default Card