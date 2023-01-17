import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input'
import { saveUser } from '../../store/slices/userSlice';
import './SignUp.scss'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signup',
                { name, email, password });
            dispatch(saveUser(data))
            alert(`Вы зарегестрировались`)
            navigate('/')    
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='sign-up'>
            <form className='sign-up__form' onSubmit={signUp}>
                <h3 className='sign-up__form-title'>
                    Регистрация
                </h3>
                <Input name="Ваше имя" required placeholder="Введите ваше имя"
                    value={name} onChange={e => setName(e.target.value)} type="text" />
                <Input name="Ваш email" required placeholder="Введите ваш email"
                    value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <Input name="Ваше пароль" required placeholder="Введите ваш пароль"
                    value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <div className='sign-up__descr'>
                    <p>Регистрируясь, вы соглашаетесь с{" "}</p>
                    <Link to="/security" className='sign-up__link'>
                        пользовательским соглашением</Link>
                </div>
                <button type='submit' className="sign-up__button">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
                <div className='sign-up__bottom'>
                    <p>Уже есть зарегестрированы? </p>
                    <Link to="/login" className='sign-up__link'>
                        Войти</Link>
                </div>
            </form>
        </div>

    )
}

export default SignUp
