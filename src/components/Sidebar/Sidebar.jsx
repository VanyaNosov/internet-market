import React, { useState } from 'react'
import logo from '../../assets/logo-gray.png'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import './Sidebar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { socIcons } from '../../constants/footerInfo'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'


const info = [
    {
        path: '/',
        name: 'Акции'
    },
    {
        path: '/',
        name: 'Кредит'
    },
    {
        path: '/',
        name: 'Оплата и доставка'
    },
    {
        path: '/',
        name: 'Гарантия'
    },
    {
        path: '/',
        name: 'Частые вопросы'
    },
    {
        path: '/',
        name: 'Новости'
    },
    {
        path: '/',
        name: 'Блог'
    },
    {
        path: '/',
        name: 'О нас'
    },
    {
        path: '/',
        name: 'Политика конфиденциальности'
    },
    {
        path: '/',
        name: 'Контакты'
    },
]

const Sidebar = ({showSidebar, setShowSidebar}) => {
    const [activeInfo, setActiveInfo] = useState(true)
    const { user } = useSelector(state => state.userSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeUserProfile = () => {
        dispatch(removeUser())
        navigate('/login')
    }

    if (showSidebar) {
        return (
            <div className='sidebar__wrapper'>
                <div className='sidebar'>
                    <div className='sidebar__top'>
                        <div className='sidebar__logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <button className='sidebar__close' onClick={() => setShowSidebar(false)}>
                            <RxCross1 fontSize={24} color="#fff" />
                        </button>
                    </div>
                    <div className='sidebar__info'>
                        {!user ? (
                            <div className='sidebar__info-links'>
                                <Link to="/login" >
                                    Вход
                                </Link>
                                /
                                <Link to="/register">
                                    Регистрация
                                </Link>
                            </div>
                        ) : (
                            <div className='sidebar__info-user'>
                                <AiOutlineUser fontSize={26} />
                                <div className='sidebar__user-info'>
                                    <p className='sidebar__user-name'>
                                        {user.email || 'ivanov@gmail.com'}
                                    </p>
                                    <button className='sidebar__info-exit'
                                    onClick={removeUserProfile}>
                                        Выйти
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='sidebar__content'>
                        <h3 className='sidebar__content-title'
                            onClick={() => setActiveInfo(!activeInfo)}>
                            Информация
                        </h3>
                        {activeInfo &&
                            <div className={`sidebar__content-info ${!setActiveInfo ? 'active' : ''}`}>
                                {info.map((inf, i) => (
                                    <Link to={inf.path} key={i}>
                                        {inf.name}
                                    </Link>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='sidebar__contacts'>
                        <h3 className='sidebar__contacts-title'>Контакты</h3>
                        <p>(067) 11-12-485 - Отдел продаж</p>
                        <p>(066) 484-39-22 - Отдел продаж</p>
                        <p>(063) 747-33-48 - Отдел продаж</p>
                        <p>Днепр <br />
                            Европейская, 8 (бывшая Миронова 8)</p>
                        <p>
                            Понедельник-Пятница 9:00-19:00 <br />
                            Суббота-Воскресенье: с 9:00-16:00
                        </p>
                        <h3 className='sidebar__contacts-title'>Следите за нами</h3>
                        <ul className='social-icons'>
                            {socIcons.map((icon) => (
                                <div className='social-icon' key={icon.path}>
                                    <Link path={icon.path}>
                                        {icon.icon}
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
