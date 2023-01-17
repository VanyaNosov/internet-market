import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NewsCard from '../../components/News/NewsCard'
import { getNewsDetail } from '../../store/slices/newsSlice'
import './NewsDetails.scss'

const NewsDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const newsDetail = useSelector((state) => state.newsSlice.newsDetail)
    const news = useSelector((state) => state.newsSlice.news)
    const filteredNews = news?.filter((newsD) => newsD?._id !== newsDetail?._id)

    useEffect(() => {
        const fetchNewsDetails = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`/api/news/${id}`)
                dispatch(getNewsDetail(data))
                setLoading(false)
            } catch (err) {
                console.log(err.message);
                setLoading(false)
            }
        }
        fetchNewsDetails();
    }, [dispatch, id])

    if (loading || !newsDetail) return <h1>Loading...</h1>

    return (
        <>
            <div className='news-details'>
                <div className='news-details__content'>
                    <h2 className='news-details__title'>
                        {newsDetail.title}
                    </h2>
                    <p className='news-details__date'>
                        Новости, {newsDetail.createdAt.slice(0, 10)}
                    </p>
                    <p className='news-details__descr'>
                        {newsDetail.descr.slice(0, 500)}...
                    </p>
                    <div className='news-details__img'>
                        <img src={newsDetail.img} alt={newsDetail.name} />
                    </div>
                    <p className='news-details__descr'>
                        ...{newsDetail.descr.slice(500, 1000)}
                        ...
                    </p>
                    {newsDetail.images.length !== 0 && (
                        <div className='news-details__images-container'>
                            {newsDetail.images.map((img) => (
                                <div className='news-details__image' key={img}>
                                    <img src={img} alt="img" />
                                </div>
                            ))}
                        </div>
                    )}
                    {
                        newsDetail.descr.length >= 1000 && (
                            <p className='news-details__descr'>
                                ...{newsDetail.descr.slice(1000)}
                            </p>
                        )
                    }
                </div>
            </div>
            <div className='container'>
            <div className='news-details__other'>
                <h5 className='news-details__other-title'>
                    Читайте также:
                </h5>
                <div className='news-details__other-inner'>
                    {filteredNews.slice(0, 4).map((item) => <NewsCard key={item._id} newDetail={item}/>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsDetails
