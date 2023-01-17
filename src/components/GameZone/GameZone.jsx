import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Products/Product'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './GameZone.scss'
import { categoriesForGamers } from '../../constants/categories'
import { useSelector } from 'react-redux'


const GameZone = () => {
    const {products} = useSelector((state) => state.productsSlice)
    const filteredProducts = products?.filter((item) => item.category.includes("Игровые"))
     return (
        <div className='gamezone'>
            <div className='container'>
                <h2>GAME ZONE</h2>
                <div className='gamezone__inner'>
                    {filteredProducts.slice(0, 6).map((product, i) => (
                        <Product key={`${product.id} + ${i}`} product={product} />
                    ))}
                    <Link to="/gamezone" className='gamezone__full'>
                        Смотреть все товары <AiOutlineArrowRight color='#FFFFFF' />
                    </Link>
                </div>
                <h3>Категории для геймеров</h3>
                <div className='gamezone__categories'>
                    {categoriesForGamers.map((category) => (
                        <Link to={category.path} className='gamezone__category' key={category.name}>
                            <div className='gamezone__category-info'>
                                <div className='gamezone__category-image'>
                                    <img src={category.img} alt={category.name} />
                                </div>
                            </div>
                            <p className='gamezone__category-name'>{category.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ) 
}

export default GameZone
