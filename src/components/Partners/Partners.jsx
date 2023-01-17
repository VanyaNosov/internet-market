import React from 'react'
import { partners } from '../../constants/partners'
import { Link } from 'react-router-dom'
import './Partners.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Partners = () => {
    return (
        <div className='partners'>
            <div className='container'>
                <div className='partners__top'>
                    <h2>Партнеры</h2>
                    <Link to="/partners" className='partners__link'>
                        <span>Перейти</span> <AiOutlineArrowRight size={14} color="#01579B"/>
                    </Link>
                </div>
                <div className='partners__inner'>
                    {partners.map((partner, i) => (
                        <Link to={partner.path} key={i}>
                            <img src={partner.img} alt="partner img" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
