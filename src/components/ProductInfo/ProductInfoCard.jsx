import React from 'react'
import './ProductInfo.scss'

const ProductInfoCard = ({ title, info, }) => {
    return (
        <div className='product-info__details'>
            <div className='product-info__details-card'>
                <h4 className='product-info__details-title'>{title}</h4>
                {info.map((item, i) => {
                    return item.icon ?  (
                        <div className='product-info__details-pay' key={i}>
                            {item.icon}
                            <p>{item.name}</p>
                        </div>
                    ) :  (
                        <div className='product-info__details-delivery' key={i}>
                            <p>{item.name}</p>
                            <p>{item.time}</p>
                            <p>{item.meaning}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductInfoCard
