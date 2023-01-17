import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Review from '../Review/Review'
import './ProductReviews.scss'

const ProductReviews = ({ reviews, setIsOpen }) => {
  return (
    <div className='product-info__reviews-wrapper'>
      <div className='product-info__reviews'>
        <h2 className='product-info__reviews-title'>
          Отзывы ({reviews.length})
        </h2>
        {reviews.length === 0 ? (<h1>Отзывов пока нету :(</h1>) : (
          reviews.map((rev, i) => (
            <Review review={rev} key={i} />
          ))
        )}
        <button className='product-info__reviews-btn' onClick={() => setIsOpen(true)}>
          ДОБАВИТЬ ОТЗЫВ
        </button>
      </div>
      <ProductCard />
    </div>
  )
}

export default ProductReviews
