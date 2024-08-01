import React from 'react'

function Card({img, description}) {
  return (
    <div className='bg-gradient'>
      <img src={img} alt={description} />
      <h4 className='font-bold'>{description}</h4>
    </div>

  )
}

export default Card