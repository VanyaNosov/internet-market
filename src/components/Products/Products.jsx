import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import './Product.scss'

const Products = () => {
    const { products } = useSelector((state) => state.productsSlice)
    return (
        <div className='products'>
            <h2>Топ продаж</h2>
            <div className='products__inner'>
                {!products && 'Loading...'}
                {products.slice(0, 12).map((product, i) => (
                    <Product product={product} key={`${product._id} + ${i}`} id={product._id}/>
                ))}
            </div>
        </div>
    )
}

export default Products
