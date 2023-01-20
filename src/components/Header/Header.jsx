import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlinks } from '../../constants/navlinks'
import { AiOutlineUser, AiFillPlusCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import './Header.scss'
import logo from '../../assets/Logo.png'
import { GrCatalog } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu, GiScales } from 'react-icons/gi'
import { TbNewSection } from 'react-icons/tb'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import SearchWindow from '../SearchWindow/SearchWindow'
import Cart from '../Cart/Cart'

const Header = ({ setShowSidebar }) => {
    const {cartItems} = useSelector(state => state.cartSlice);
    console.log(cartItems)
    const { user } = useSelector(state => state.userSlice)
    const [searchTerm, setSearhTerm] = useState("")
    const [isCartOpen, setIsCartOpen] = useState(false)
    return (
        <header className='header'>
        {
            isCartOpen 
                &&
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        }
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
                            <input
                                type="text"
                                placeholder='Поиск '
                                value={searchTerm}
                                onChange={e => setSearhTerm(e.target.value)}

                            />
                            {searchTerm && <RxCross1 onClick={() => setSearhTerm("")}
                            color='#000' fontSize={20} style={{
                                margin: '0 20px 0 -40px',
                                cursor: "pointer"
                            }}/>}
                            <button>
                                <BsSearch color='white' fontSize={20} />
                            </button>
                        </div>
                        <div className='header__content-phone'>
                            <a href="tel:380950083933">+380950083933</a>
                        </div>
                        <div className='header__content-links'>
                            <div className='header__content-link'>
                                <button><GiScales fontSize={24} /></button>
                                <span>0</span>
                            </div>
                            <div className='header__content-link'>
                                <button><AiOutlineHeart fontSize={24} /></button>
                                <span>0</span>
                            </div>
                            <div onClick={() => setIsCartOpen(true)} className='header__content-link'>
                                <button><AiOutlineShoppingCart fontSize={24} /></button>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearchWindow searchTerm={searchTerm} setSearchTerm={setSearhTerm}/>
        </header>
    )
}

export default Header
