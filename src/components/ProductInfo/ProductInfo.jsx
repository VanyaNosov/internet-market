import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiScales } from 'react-icons/gi'
import { FcInspection } from 'react-icons/fc'
import { RxValueNone } from 'react-icons/rx'
import Features from '../Features/Features'
import { MdPayment, MdOutlineCreditScore } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'
import { BsShieldShaded } from 'react-icons/bs'
import './ProductInfo.scss'
import ProductInfoCard from './ProductInfoCard'
import Review from '../Review/Review'
import ReviewPopup from '../Review/ReviewPopup'

const delivery = [
    {
        name: 'Самовывоз из магазина (Днепропетровск) ',
        time: 'Отправим сегодня',
        meaning: 'Бесплатно'
    },
    {
        name: 'Самовывоз из Justin',
        time: 'Отправим сегодня',
        meaning: 'По тарифам перевозчика Или бесплатно от 5000 грн'
    },
    {
        name: 'Самовывоз  УКРПОШТА',
        time: 'Отправим сегодня',
        meaning: 'По тарифам перевозчика Или бесплатно от 5000 грн'
    },
    {
        name: 'Самовывоз из Новой Почты ',
        time: 'Отправим сегодня',
        meaning: 'По тарифам перевозчика Или бесплатно от 5000 грн'
    },
    {
        name: 'Курьер по вашему адресу ',
        time: 'Отправим завтра',
        meaning: 'По тарифам перевозчика Или бесплатно от 5000 грн'
    }
]

const pay = [
    {
        icon: <MdPayment fontSize={18} color="blue" />,
        name: "Оплата при получении товара, Google Pay, картой онлайн"
    },
    {
        icon: <TfiReload fontSize={18} color="blue" />,
        name: "Рассрочка 0% на 4 мес."
    },
    {
        icon: <MdOutlineCreditScore fontSize={18} color="blue" />,
        name: "Кредит, с условиями вы можете ознакомится здесь"
    },

]

const guarantee = [
    {
        icon: <BsShieldShaded fontSize={18} color="blue" />,
        name: '36 месяцев'
    },
    {
        icon: <TfiReload fontSize={18} color="blue" />,
        name: 'Обмен/возврат товара в течение 14 дней'
    },

]

const ProductInfo = ({ product: { img, name, price, discount, isSale,
    reviews, descr, features, isNew, images, _id }, isOpen, setIsOpen }) => {
    const [selectedImage, setSelectedImage] = useState('');

    return (
        <div className='product-info'>
            <div className='product-info__left'>
                <div className='product-info__images'>
                    <div className='product-info__img-container'>
                        {[img, ...images]?.slice(0, 4).map((img) => (
                            <div key={img} onClick={() => setSelectedImage(img)}>
                                <img src={img} alt="images" />
                            </div>
                        ))}
                    </div>
                    <div className='product-info__img'>
                        <img src={selectedImage || img} alt={name} />
                    </div>
                </div>
                <Features title="Основные характеристики" features={features.slice(0, 7)} />
                <div className='product-info__descr'>
                    <h4 className='product-info__descr-title'>
                        Описание товара
                    </h4>
                    <p className='product-info__descr-text'>
                        {descr}
                    </p>
                </div>
            </div>
            <div className='product-info__right'>
                <div className='product-info__main'>
                    {isSale ? (
                        <div className='in-sale'>
                            <FcInspection fontSize={20} />
                            <p>В наличии</p>
                        </div>) : (
                        <div className='no-sale'>
                            <RxValueNone fontSize={20} />
                            <p>Нету в наличии</p>
                        </div>
                    )}
                    {isNew && (
                        <div className='new'>
                            <p>Новинка</p>
                        </div>
                    )}
                    <div className='product-info__main-buttons'>
                        <GiScales color='#01579B' fontSize={26}
                            style={{ cursor: 'pointer' }} />
                        <AiOutlineHeart color='#01579B' fontSize={26}
                            style={{ cursor: 'pointer' }} />
                    </div>
                </div>
                <div className='product-info__prices'>
                    {discount ? (
                        <div className='product-info__discount'>
                            <p className='product-info__newprice'>
                                {price - (price * discount)} <span>грн.</span>
                            </p>
                            <p className='product-info__oldprice'>
                                {price} <span>грн.</span>
                            </p>
                        </div>
                    ) : (
                        <p className='product-info__price'>
                            {price} <span>грн </span>
                        </p>
                    )}
                    <button className='product-info__buy'>
                        КУПИТЬ
                    </button>
                </div>
                <ProductInfoCard title="Доставка" info={delivery} />
                <ProductInfoCard title="Оплата" info={pay} />
                <ProductInfoCard title="Гарантия" info={guarantee} />
                <div className='product-info__reviews'>
                    <h2 className='product-info__reviews-title'>
                        Отзывы ({reviews.length})
                    </h2>
                    {reviews.length === 0 ? (<h1>Отзывов пока нету :(</h1>) : (
                        reviews.map((rev, i) => (
                            <Review review={rev} key={i} />
                        ))
                    )}
                </div>
                <button onClick={() => setIsOpen(true)}
                    className='product-info__reviews-btn'>
                    ДОБАВИТЬ ОТЗЫВ
                </button>
            </div>
        </div>
    )
}

export default ProductInfo
