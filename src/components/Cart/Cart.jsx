import React from 'react'
import './Cart.scss'
import {RxCross2} from 'react-icons/rx'
import {useSelector} from 'react-redux'
import CartItem from './CartItem/CartItem'

const Cart = ({isCartOpen, setIsCartOpen}) => {
  const {cartItems} = useSelector(state => state.cartSlice);
  console.log(cartItems)
  const {products} = useSelector(state => state.productsSlice);
  const sumPrices = products?.slice(0, 3).reduce((acc, el) => acc + el.price, 0)
  console.log(products)
  if(products.lenght === 0) {
    return alert('хуй в корзине')
  }
  return (
    <div className='cart__wrapper'>
    <div className='cart'>
      <div className='cart__top'>
        <h6>Корзина</h6>
        <RxCross2 style={{cursor: 'pointer'}} fontSize={18} color='red'onClick={() => setIsCartOpen(false)}/>
      </div>
      <div className='cart__content'>
        {products?.slice(0, 3).map(product => 
          <CartItem key={product._id} item={product} />
        )}
      </div>
      <div className='cart__bottom'>
        <button onClick={() => setIsCartOpen(false)} className='cart__bottom-btn'>Продолжить покупку</button>
        <p>{sumPrices} грн.</p>
        <button className='cart__order'>оформить заказ</button>
      </div>
    </div>
  </div>
  )
}

export default Cart