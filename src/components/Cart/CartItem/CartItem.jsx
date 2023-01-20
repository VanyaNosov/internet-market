import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import './CartItem.scss'


const CartItem = ({item}) => {
  return (
    <div className='cart-item'>
      <div className='cart-item__img'>
        <img src={item.img} alt={item.name}/>
      </div>
      <p>{item.name}</p>
      <div className='cart-item__counter'>
        <button className='cart-item__decrement'>-</button>
        <p>1</p>
        <button className='cart-item__increment'>+</button>
      </div>
      <p className='cart-item__price'>{item.price} грн.</p>
      <button className='cart-item__delete'><RiDeleteBin5Line fontSize={18} color='red'/></button>
    </div>
  )
}

export default CartItem