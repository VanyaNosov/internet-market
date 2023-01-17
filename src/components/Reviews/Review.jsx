import React from 'react'
import StarsRating from 'react-star-rate'
import './Reviews.scss'

const Review = ({ review }) => {
    return (
        <div className='review'>
            <div className='review__content'>
                <div className='review__img'>
                    <img src={review.avatarImg} alt="avatar" />
                </div>
                <div className='review__text'>
                    <h5>{review.name}</h5>
                    <p className='review__text-text'>{review.text}</p>
                    <div className='review__content-bottom'>
                    <StarsRating style={{ width: 10 }}
                        value={review.numReview}
                        onChange={() => { }}
                        disabled
                    />
                    <p className='review__date'>{review.date}</p>
                </div>
                </div>
            </div>
            <div className='review__info'>
                <p className='review__info-num'>{review.numReview}</p>
                <p className='review__info-text'>532 отзыва на Google</p>
            </div>
        </div>
    )
}

export default Review
