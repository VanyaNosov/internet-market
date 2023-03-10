import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { categories } from '../../constants/categories'
import { features } from '../../constants/features'
import { MdArrowForwardIos } from 'react-icons/md'
import './Home.scss'

const Home = () => {
  return (
    <div className='main'>
      <div className='main__categories'>
        {categories.map((category) => (
          <Link to={category.path} className='main__category' key={category.name}>
            {category.icon}
            <p>{category.name}</p>
            {category.new && <span>NEW</span>}
            <MdArrowForwardIos className='main__category-icon' />
          </Link>
        ))}
      </div>
      <div className='main__info'>
        <div className='main__banner'>
          <Banner />
        </div>
        <div className='main__features'>
          {features.map((feature) => (
            <div className='main__feature' key={feature.name}>
              <img src={feature.image} alt={feature.name} />
              <p>{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
