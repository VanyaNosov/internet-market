import React from 'react'
import './Review.scss'
import user from '../../assets/user.png'
import StarsRating from 'react-star-rate'


const Review = ({ review }) => {
  return (
    <div className='review-item'>
      <div className='review-item__img'>
        <img src={user} alt={review.name} />
      </div>
      <div className='review-item__content'>
        <div className='review-item__content-top'>
          <h5 className='review-item__content-name'>
            {review.name}
          </h5>
          <StarsRating style={{ width: 10 }}
            value={review.rating}
            onChange={() => { }}
            disabled
          />
          {
            review.createdAt &&
            <p className='review-item__content-date'>{review.createdAt.slice(0, 10)}</p>
          }
        </div>
        <p className='review-item__content-descr'>{review.comment.slice(0, 150)}</p>
      </div>
    </div>
  )
}

export default Review
