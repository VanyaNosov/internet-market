import React from 'react'
import { Link } from 'react-router-dom'
import { contacts, info, services, socIcons } from '../../constants/footerInfo'
import { TbBrandTelegram } from 'react-icons/tb'
import logo from '../../assets/logo-gray.png'
import mastercard from '../../assets/mastercard.png'
import visa from '../../assets/visa.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__top'>
                    <div className='footer__info'>
                        <h3>Информация</h3>
                        <ul className='footer__info-list'>
                            {info.map((inf) => (
                                <li key={inf.name}>
                                    <Link to={inf.path} className="footer__info-list-link" >
                                        {inf.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer__services'>
                        <h3>Услуги и сервисы</h3>
                        <ul className='footer__services-list'>
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link to={service.path} className="footer__services-list-link" >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer__contacts'>
                        <h3>Контакты</h3>
                        <ul className='footer__contacts-list'>
                            {contacts.map((contact) => (
                                <li key={contact.name}>
                                    {contact.name}
                                </li>
                            ))}
                            <li>
                                Днепр <br />
                                Европейская, 8 (бывшая Миронова 8)
                            </li>
                            <li>
                                Понедельник-Пятница 9:00-19:00 <br />
                                Суббота-Воскресенье: с 9:00-16:00
                            </li>
                        </ul>
                    </div>
                    <div className='footer__social'>
                        <h3>Следите за нами</h3>
                        <ul className='footer__social-icons'>
                            {socIcons.map((icon) => (
                                <div className='footer__social-icon' key={icon.path}>
                                    <Link path={icon.path}>
                                        {icon.icon}
                                    </Link>
                                </div>
                            ))}
                        </ul>
                        <h3>Подписывайтесь на скидки</h3>
                        <div className='footer__social-input'>
                            <input type="email" placeholder='Укажите ваш email...' />
                            <button>
                                <TbBrandTelegram color='#060F42' fontSize={24}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <p>2008-2021 Интернет-магазин v-comp.com.ua Все права защищены</p>
                    <div className="footer__bottom-icons">
                        <img src={mastercard} alt="mastercard" />
                        <img src={visa} alt="visa" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
