import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './News.scss'

const NewsCard = ({ newDetail }) => {
    return (
        <div className='news__item'>
            <div className='news__img'>
                <img src={newDetail.img} alt={newDetail.title} />
            </div>
            <h6>{newDetail.title}</h6>
            <p>{newDetail.descr.slice(0, 150)}...</p>
            <div className='news__bottom'>
                <span>{newDetail.createdAt.slice(0, 10)}</span>
                <Link to={`/news/${newDetail._id}`} className="news__bottom-link">
                    <p>Читать полностью</p> <AiOutlineArrowRight size={14} style={{marginTop: '2px'}}/>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard
