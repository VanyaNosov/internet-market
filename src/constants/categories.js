import { FiSettings, FiMonitor } from 'react-icons/fi'
import { GrCloudComputer } from 'react-icons/gr'
import { MdLaptopChromebook, MdOutlineTabletMac } from 'react-icons/md'
import { TbIcons } from 'react-icons/tb'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsSpeaker } from 'react-icons/bs'
import { GiWifiRouter } from 'react-icons/gi'


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