import { FiSettings, FiMonitor } from 'react-icons/fi'
import { GrCloudComputer } from 'react-icons/gr'
import { MdLaptopChromebook, MdOutlineTabletMac } from 'react-icons/md'
import { TbIcons } from 'react-icons/tb'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsSpeaker } from 'react-icons/bs'
import { GiWifiRouter } from 'react-icons/gi'

import a1 from '../assets/categories/a1.png'
import a2 from '../assets/categories/a2.png'
import a3 from '../assets/categories/a3.png'
import a4 from '../assets/categories/a4.png'
import a5 from '../assets/categories/a5.png'
import a6 from '../assets/categories/a6.png'


export const categories = [
    {
        icon: <FiSettings />,
        name: 'Комплектующие ПК',
        new: false,
        path: '/pc-components'
    },
    {
        icon: <FiMonitor />,
        name: 'Мониторы',
        new: false,
        path: '/monitors'
    },
    {
        icon: <GrCloudComputer />,
        name: 'Компьютеры',
        new: false,
        path: '/computers'
    },
    {
        icon: <MdLaptopChromebook />,
        name: 'Ноутбуки',
        new: false,
        path: '/laptops'
    },
    {
        icon: <TbIcons />,
        name: 'Игровые консоли',
        new: true,
        path: '/consoles'
    },
    {
        icon: <FaLaptopCode />,
        name: 'Комплектующие к ноутбукам',
        new: false,
        path: '/laptop-components'
    },
    {
        icon: <MdOutlineTabletMac />,
        name: 'Планшеты',
        new: false,
        path: '/tablets'
    },
    {
        icon: <AiOutlinePrinter />,
        name: 'Принтеры и МФУ',
        new: false,
        path: '/printers'
    },
    {
        icon: <BsSpeaker />,
        name: 'Акустические колонки',
        new: false,
        path: '/speakers'
    },
    {
        icon: <GiWifiRouter />,
        name: 'Сетевое оборудование',
        new: false,
        path: '/wifi-components'
    }
]
export const categoriesForGamers = [
    {
        name: 'Клавиатуры',
        img: a1,
        path:  "/keyboards"
    },
    {
        name: 'Мыши',
        img: a2,
        path:  "/keyboards"
    },
    {
        name: 'Аксесуары',
        img: a3,
        path:  "/keyboards"
    },
    {
        name: 'Иговые ноутбуки',
        img: a4,
        path:  "/keyboards"
    },
    {
        name: 'Видеокарты',
        img: a5,
        path:  "/keyboards"
    },
    {
        name: 'Мониторы',
        img: a6,
        path:  "/keyboards"
    },

]