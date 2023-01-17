import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import StarsRating from 'react-star-rate'
import Features from '../../components/Features/Features'
import FeaturesWrapper from '../../components/Features/FeaturesWrapper'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ProductReviews from '../../components/ProductReviews/ProductReviews'
import ReviewPopup from '../../components/Review/ReviewPopup'
import { getProductDetail } from '../../store/slices/productSlice'
import './ProductDetails.scss'

const tabs = ["Всё о товаре", "Характеристики", "Отзывы"]

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(0)
    const { id } = useParams()
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productsSlice.productDetail)
    const { user } = useSelector((state) => state.userSlice)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`/api/products/${id}`)
                dispatch(getProductDetail(data))
                setLoading(false)
            } catch (err) {
                console.log(err);
                setLoading(false)
            }
        }
        fetchProduct();
    }, [dispatch, id])

    if (loading || product === null) return <h1>Loading...</h1>

    return (
        <div className='product-details'>
            <ReviewPopup isOpen={isOpen} setIsOpen={setIsOpen} user={user} id={product._id}/>
            <div className="container">
                <div className='product-details__top'>
                    <div className='product-details__top-header'>
                        <h2 className='product-details__top-title'>
                            {product.name}
                        </h2>
                        <div className='product-details__top-reviews'>
                            {product.rating > 0 && (
                                <StarsRating style={{ width: 10 }}
                                    value={product.rating}
                                    onChange={() => { }}
                                    disabled
                                />
                            )}
                            <p>Отзывов: {product.reviews.length}</p>
                        </div>
                    </div>
                    <div className='product-details__top-code'>
                        <p className='product-details__top-code-text'>
                            Код товара: {product._id}
                        </p>
                    </div>
                </div>
                <div className='product-details__tabs'>
                    {tabs.map((tab, i) => (
                        <button
                            className={`product-details__tab 
                            ${active === i ? 'active' : ''}`}
                            key={i}
                            onClick={() => setActive(i)}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className='product-details-content'>
                    {active === 0 && <ProductInfo
                        product={product}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    />}
                    {active === 1 && <FeaturesWrapper features={product.features} />}
                    {active === 2 && <ProductReviews
                        reviews={product.reviews}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
