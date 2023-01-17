import React from 'react'
import './Features.scss'

const Features = ({ features }) => {
  return (
    <div className='features'>
      {features?.map((feature, i) => (
        <div className={`feature 
        ${(i % 2) === 0 ? 'bg-gray' : ''}`} key={i}>
          <p>{feature.name}</p>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
