import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiScales } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import StarsRating from "react-star-rate";
import { addToCart } from '../../store/slices/cartSlice';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import './Product.scss'

const Product = ({ product: { name, price, img, reviews,
    discount, rating, isNew }, id }) => {
    const {products} = useSelector(state => state.productsSlice);
    const dispatch = useDispatch();
    const dispatchToCart = (id) => {
        const currentProduct = products?.find(prod => prod._id === id)
        dispatch(addToCart({...currentProduct }))
    }
    return (
        <div className='product__wrapper'>
            <div className='product__top'>
                {isNew && <div className='product__new'>Новинка</div>}
                <div className='product__icons'>
                    <GiScales color='#01579B' fontSize={20}
                        style={{ cursor: 'pointer' }} />
                    <AiOutlineHeart color='#01579B' fontSize={20}
                        style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <Link to={`/products/${id}`}>
                <div className='product__img'>
                    <img src={img} alt={name} />
                </div>
                <p className='product__name'>
                    {name.slice(0, 25)}{name.length >=25 && '...'}
                </p>
            </Link>
            <div className='reviews'>
                {rating > 0 && (
                    <StarsRating style={{ width: 10 }}
                        value={rating}
                        onChange={() => { }}
                        disabled
                    />
                )}
                <p className='product__reviews'>
                    Отзывов: {reviews?.length}
                </p>
            </div>
            <div className='product__bottom'>
                {discount > 0 ? (
                    <div className='product__discount'>
                        <p className='product__price-old'>
                            {price} <span>грн.</span>
                        </p>
                        <p className='new__price-discount'>
                            {price - (price * discount)} грн.
                        </p>
                    </div>
                ) : (
                    <p className='product__price'>
                        {price} <span>грн.</span>
                    </p>
                )}
                <button onClick={() => dispatchToCart(id)} className='product__btn'>
                    КУПИТЬ
                </button>
            </div>
        </div>
    )
}

export default Product
