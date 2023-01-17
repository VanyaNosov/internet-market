import React from 'react'
import { text } from '../../constants/about'
import './About.scss'

const About = () => {
    return (
        <div className='about'>
            <h2>Магазин компьтерной техники и Аксессуар v-comp.com.ua</h2>
            {text.map((desc, i) => <p key={i}>{desc}</p>)}
        </div>
    )
}

export default About
