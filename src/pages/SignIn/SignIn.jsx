import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { saveUser } from '../../store/slices/userSlice';
import './SignIn.scss'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post('/api/users/signin',
            {email, password });
        dispatch(saveUser(data))
        alert(`Вы вошли в систему`)
        navigate('/')    
    } catch (err) {
        console.log(err);
    }

}

  return (
    <div className='sign-in'>
      <form className='sign-in__form' onSubmit={signIn}>
        <h3 className='sign-in__form-title'>
          Вход
        </h3>
        <Input name="Ваш email" required placeholder="Введите ваш email"
          value={email} onChange={e => setEmail(e.target.value)} type="email" />
        <Input name="Ваше пароль" required placeholder="Введите ваш пароль"
          value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <button type='submit' className="sign-in__button">
          Войти
        </button>
        <div className='sign-in__bottom'>
          <p>У вас нету аккаунта? </p>
          <Link to="/register" className='sign-in__link'>
            Зарегестрируйтесь</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn
