import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductSmallCard from '../ProductSmallCard/ProductSmallCard'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchWindow.scss'

const SearchWindow = ({ searchTerm, setSearchTerm }) => {
    const { products } = useSelector((state) => state.productsSlice)
    const filteredProducts = products?.filter(
        (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
            || product.category.toLowerCase().includes(searchTerm.toLowerCase())
            || product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const filteredProductsByCategory = products.filter((product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const categoriesArray = filteredProductsByCategory?.map((product) => product.category)
    console.log("🚀 ~ file: SearchWindow.jsx:19 ~ SearchWindow ~ categoriesArray", categoriesArray)
    const uniqueCategories = categoriesArray?.filter((category, i) => {
        return categoriesArray.indexOf(category) === i
    })
    console.log("🚀 ~ file: SearchWindow.jsx:19 ~ uniqueCategories ~ uniqueCategories", uniqueCategories)


    if (!searchTerm) return null;


    return (
        <div className='search-window__wrapper'>
            <div className="search-window">
                <div className='search-window__top'>
                     {uniqueCategories && (
                        <>
                            <h6 className='search-window__title'>Поиск по категориям</h6>
                            <div className='search-window__inner'>
                                {uniqueCategories.slice(0, 4).map((category) => (
                                    <Link className='search-window__item' to="/">
                                        <AiOutlineSearch fontSize={16} color="#999"/>
                                        <p className='search-window__value'>{searchTerm}</p>
                                        <p>в категории {category}</p>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )} 

                </div>
                <h6 className='search-window__title'>
                    Количество товаров по вашему запросу: {filteredProducts.length}
                </h6>
                <div className='search-window__items'>
                    {filteredProducts.slice(0, 6).map((product) =>
                        <ProductSmallCard product={product} setSearchTerm={setSearchTerm} />)}
                </div>
            </div>
        </div>
    )
}

export default SearchWindow
