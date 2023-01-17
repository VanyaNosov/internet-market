import {
    AiOutlineInstagram, AiFillFacebook, AiFillLinkedin
} from 'react-icons/ai'
import { FaWhatsapp, FaYoutube} from 'react-icons/fa'
import { TbBrandTelegram } from 'react-icons/tb'

export const info = [
    {
        name: 'Акции',
        path: '/sales'
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
        name: 'Гарантия',
        path: '/guarantees'
    },
    {
        name: 'Частые вопросы',
        path: '/questions'

    },
    {
        name: 'Новости',
        path: '/news'
    },
    {
        name: 'Блог',
        path: '/blog'
    },
    {
        name: 'О нас',
        path: '/about'
    },
    {
        name: 'Политика конфиденциальности',
        path: '/rules'
    },
    {
        name: 'Контакты',
        path: '/contacts'
    }
]

export const services = [
    {
        name: 'Сервисный центр v-comp',
        path: '/service-centre'
    },
    {
        name: 'Магазин Б/У товара',
        path: '/used-market'
    },
    {
        name: 'Скупка Б/У ',
        path: '/used'
    },
    {
        name: 'Ремонт ПК и оргтехники',
        path: '/pc-fixing'
    },
    {
        name: 'Компьютерная помощь',
        path: '/help'
    },
    {
        name: 'Сотрудничество',
        path: '/cooperation'
    },
    {
        name: 'Главная',
        path: '/'
    },

]

export const contacts = [
    {
        name: '(067) 11-12-485 - Отдел продаж'
    },
    {
        name: '(066) 484-39-22 - Отдел продаж'
    },
    {
        name: '(063) 747-33-48 - Отдел продаж'
    }
]

export const socIcons = [
    {
        icon: <AiOutlineInstagram fontSize={20} color="#000"/>,
        path: 'https://www.instagram.com/'
    },
    {
        icon: <AiFillFacebook fontSize={20} color="#000"/>,
        path: 'https://uk-ua.facebook.com/'
    },
    {
        icon: <AiFillLinkedin fontSize={20} color="#000"/>,
        path: 'https://ua.linkedin.com/'
    },
    {
        icon: <FaYoutube fontSize={20} color="#000"/>,
        path: 'https://www.youtube.com/'
    },
    {
        icon: <FaWhatsapp fontSize={20} color="#000"/>,
        path: 'https://web.whatsapp.com/'
    },
    {
        icon: <TbBrandTelegram fontSize={20} color="#000"/>,
        path: 'https://web.telegram.org/'
    },
]