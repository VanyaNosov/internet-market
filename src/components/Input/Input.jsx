import React from 'react'
import './Input.scss'

const Input = ({value, onChange, type, name, placeholder, required}) => {
    return (
        <div className='create__form-item'>
            <p className='create__form-name'>
                {name}
            </p>
            <input type={type} className='create__form-input' placeholder={placeholder}
                value={value} onChange={onChange} required={required} />
        </div>
    )
}

export default Input
