import React from 'react'
import { banner } from '../../constants/banner'
import './Banner.scss'

const dots = [
  {
    isActive: true
  },
  {
    isActive: false
  },
  {
    isActive: false
  },
  {
    isActive: false
  }
]

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__item'>
        <img src={banner[0].image} alt={banner[0]} />
        <div className='banner__info'>
          <h2>{banner[0].text}</h2>
          <p>{banner[0].smallText}</p>
          <button>
            BANNER BUTTON
          </button>
        </div>
        <div className='dots'>
          {dots.map((dot, i) => (
            <button key={i}
            className={dot.isActive ? 'dot-active' : 'dot'}></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
