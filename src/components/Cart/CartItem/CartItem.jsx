import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { increment, decrement, clearProduct } from '../../../store/slices/cartSlice'
import './CartItem.scss'


const CartItem = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className='cart-item'>
      <div className='cart-item__img'>
        <img src={item.img} alt={item.name}/>
      </div>
      <p>{item.name}</p>
      <div className='cart-item__counter'>
        <button className='cart-item__decrement' disabled={ item.quantity <= 1 ? true : false } onClick={() => dispatch(decrement(item))}>-</button>
        <p>{ item.quantity }</p>
        <button className='cart-item__increment' onClick={() => dispatch(increment(item))}>+</button>
      </div>
      <p className='cart-item__price'>{item.price * item.quantity} грн.</p>
      <button className='cart-item__delete' onClick={() => dispatch(clearProduct(item))}><RiDeleteBin5Line fontSize={18} color='red'/></button>
    </div>
  )
}

export default CartItem