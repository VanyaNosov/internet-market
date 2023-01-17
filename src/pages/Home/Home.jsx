import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { categories } from '../../constants/categories'
import { features } from '../../constants/features'
import { MdArrowForwardIos } from 'react-icons/md'
import './Home.scss'
import Products from '../../components/Products/Products'
import GameZone from '../../components/GameZone/GameZone'
import About from '../../components/About/About'
import News from '../../components/News/News'
import Partners from '../../components/Partners/Partners'
import Reviews from '../../components/Reviews/Reviews'
import Main from '../../components/Main/Main'

const Home = () => {

  return (
    <>
      <div className="container">
        <Main />
        <Products />
      </div>
      <GameZone />
      <Reviews />
      <Partners />
      <News />
      <About />
    </>
  )
}

export default Home
