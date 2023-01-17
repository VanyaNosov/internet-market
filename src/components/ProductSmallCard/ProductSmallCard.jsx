import React from 'react'
import { Link } from 'react-router-dom'
import './ProductSmallCard.scss'

const ProductSmallCard = ({ product, setSearchTerm }) => {
    return (
        <Link className='product-smallCard' to={`/products/${product._id}`} 
        onClick={() => setSearchTerm("")}>
            <div className='product-smallCard__img'>
                <img src={product.img} alt={product.name} />
            </div>
            <h4 className='product-smallCard__title'>
                {product.name.slice(0, 60)}...
            </h4>
        </Link>
    )
}

export default ProductSmallCard
