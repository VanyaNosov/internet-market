import React from 'react'
import { Link } from 'react-router-dom'
import { links, navlinks } from '../../constants/navlinks'
import { AiOutlineUser, AiFillPlusCircle } from 'react-icons/ai'
import './Header.scss'
import logo from '../../assets/Logo.png'
import { GrCatalog } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TbNewSection } from 'react-icons/tb'
import { useSelector } from 'react-redux'

const Header = ({ showSidebar, setShowSidebar }) => {
    const { user } = useSelector(state => state.userSlice)
    return (
        <header className='header'>
            <div className='header__top'>
                <div className="container">
                    <div className='header__top-wrapper'>
                        <nav className='header__top-list'>
                            <ul>
                                <>
                                    <GiHamburgerMenu fontSize={30} style={{ cursor: 'pointer' }}
                                        onClick={() => setShowSidebar(true)} />
                                    {navlinks?.map((link) =>
                                        <li key={link.name}>
                                            <Link to={link.path} key={link.name}>
                                                {link.name}
                                            </Link>
                                        </li>)
                                    }
                                </>
                            </ul>
                        </nav>
                        <div className='header__top-user'>
                            {user ? (
                                <>
                                    <p>Вы вошли в систему как:
                                    </p>
                                    <span>{user?.name}</span>
                                </>
                            ) : (
                                <p>Вы не в системе!</p>
                            )}
                        </div>
                        <div className='header__top-icon'>
                            <Link to="/create-product">
                                <AiFillPlusCircle fontSize={20} />
                            </Link>
                            <Link to="/create-news">
                                <TbNewSection fontSize={20} />
                            </Link>
                            <AiOutlineUser fontSize={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='header__content'>
                <div className='container'>
                    <div className='header__content-wrapper'>
                        <Link to="/">
                            <img src={logo} alt="logo" width={164} height={42} />
                        </Link>
                        <div className='header__content-btn'>
                            <button>
                                <span>КАТАЛОГ ТОВАРОВ</span>
                                <GrCatalog fontSize={18} />
                            </button>
                        </div>
                        <div className='header__content-search'>
                            <input type="text" placeholder='Поиск ' />
                            <button>
                                <BsSearch color='white' fontSize={20} />
                            </button>
                        </div>
                        <div className='header__content-phone'>
                            <a href="tel:380950083933">+380950083933</a>
                        </div>
                        <div className='header__content-links'>
                            {links.map((link, i) => (
                                <div className='header__content-link' key={i}>
                                    <Link to={link.path}>
                                        {link.icon}
                                    </Link>
                                    <span>{link.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
