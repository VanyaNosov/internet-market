import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiScales } from 'react-icons/gi'

export const navlinks = [
    {
        name: 'Акции',
        path: '/stock'
    },
    {
        name: 'Кредит',
        path: '/credit'
    },
    {
        name: 'Оплата и доставка',
        path: '/delivery'
    },
    {
        name: 'Помощь',
        path: '/help'
    },
    {
        name: 'Скупка Б/У',
        path: '/used'
    },
    {
        name: 'Контакты',
        path: '/contacts'
    }
]

export const links = [
    { icon: <GiScales fontSize={24} />, path: '/in-process', count: 22 },
    { icon: <AiOutlineHeart fontSize={24} />, path: '/favourite', count: 22 },
    { icon: <AiOutlineShoppingCart fontSize={24} />, path: '/cart', count: 22 }
]