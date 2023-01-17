import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from '../../components/News/NewsCard'
import './NewsPage.scss'

const NewsPage = () => {
    const news = useSelector((state) => state.newsSlice.news)
    return (
        <div className='news-page'>
            <div className='container'>
                <h2 className='news-page__title'>
                    Новости
                </h2>
                <div className='news-page__inner'>
                    {news?.map((item) => <NewsCard key={item._id} newDetail={item}/>)}
                </div>
            </div>
        </div>
    )
}

export default NewsPage
