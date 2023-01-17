import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { instaImages, reviews } from '../../constants/reviews'
import Review from './Review'
import './Reviews.scss'

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className='container'>
                <div className='reviews__inner'>
                    <div className='reviews__content'>
                        <div className='pagination'>
                            <AiOutlineArrowLeft fontSize={14} style={{cursor: 'pointer'}}
                            color="#01579B"/>
                            <span>3/6</span>
                            <AiOutlineArrowRight fontSize={14} style={{cursor: 'pointer'}}
                            color="#01579B"/>
                        </div>
                        <div className='reviews__top'>
                            <h2>Отзывы</h2>
                            <Link to="/reviews" className='reviews__content-link'>
                                <span>Все отзывы на Google</span>
                                <AiOutlineArrowRight size={14} color="#01579B" />
                            </Link>
                        </div>
                        {reviews.map((review) => (
                            <Review key={review.id} review={review} />
                        ))}
                    </div>
                    <div className='reviews__insta'>
                        <div className='reviews__top'>
                            <h2>Инстаграм</h2>
                            <Link to="/reviews" className='reviews__content-link'>
                                <span>Перейти</span>
                                <AiOutlineArrowRight size={14} color="#01579B" />
                            </Link>
                        </div>
                        <div className='reviews__insta-inner'>
                            {instaImages.map((img, i) => (
                                <Link to="https://intagram.com" key={i}>
                                    <img src={img} alt="insta img" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
