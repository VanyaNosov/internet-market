import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Features from './Features'
import './Features.scss'

const FeaturesWrapper = ({ features }) => {
    return (
        <div className='features__wrapper'>
            <Features features={features} />
            <ProductCard />
        </div>
    )
}

export default FeaturesWrapper
