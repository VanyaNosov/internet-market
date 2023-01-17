import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcInspection } from 'react-icons/fc'
import { GiScales } from 'react-icons/gi'
import { RxValueNone } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import './ProductCard.scss'

const ProductCard = () => {
    const product = useSelector((state) => state.productsSlice.productDetail)
    if (product === null) return <h1>Loading...</h1>
    return (
        <div className='product-card'>
            <div className='product-card__top'>
                <div className='product-card__top-img'>
                    <img src={product.img} alt={product.name} />
                </div>
                <h6 className='product-card__top-title'>
                    {product.name}
                </h6>
            </div>
            <div className='product-card__content'>
                <div className='product-info__prices' style={{ marginBottom: '10px', paddingBottom: '10px' }}>
                    {product.discount ? (
                        <div className='product-info__discount'>
                            <p className='product-info__newprice'>
                                {product.price - (product.price * product.discount)} <span>грн.</span>
                            </p>
                            <p className='product-info__oldprice'>
                                {product.price} <span>грн.</span>
                            </p>
                        </div>
                    ) : (
                        <p className='product-info__price'>
                            {product.price} <span>грн </span>
                        </p>
                    )}
                    {product.isSale ? (
                        <div className='in-sale'>
                            <FcInspection fontSize={20} />
                            <p>В наличии</p>
                        </div>) : (
                        <div className='no-sale'>
                            <RxValueNone fontSize={20} />
                            <p>Нету в наличии</p>
                        </div>
                    )}
                    <div className='product-info__main-buttons'>
                        <GiScales color='#01579B' fontSize={26}
                            style={{ cursor: 'pointer' }} />
                        <AiOutlineHeart color='#01579B' fontSize={26}
                            style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <button className='product-card__btn'>
                КУПИТЬ
            </button>
        </div>
    )
}

export default ProductCard
