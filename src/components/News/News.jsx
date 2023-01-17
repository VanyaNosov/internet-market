import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './News.scss'
import NewsCard from './NewsCard'

const News = () => {
    const news = useSelector((state) => state.newsSlice.news)
    return (
        <div className='news'>
            <div className='container'>
                <h2>Новости</h2>
                <div className='news__inner'>
                    {news?.map((newD) => (
                        <NewsCard key={newD._id} newDetail={newD} />
                    ))}
                </div>
                <Link to="/news" className='news__full'>
                    Смотреть все новости <AiOutlineArrowRight color='#01579B' />
                </Link>
            </div>
        </div>
    )
}

export default News
