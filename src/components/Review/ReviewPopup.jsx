import axios from 'axios'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StarsRating from 'react-star-rate'
import Input from '../Input/Input'

const ReviewPopup = ({ isOpen, setIsOpen, user, id }) => {
    const [rat, setRat] = useState(0)
    const [descr, setDescr] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`/api/products/${id}/reviews`, {
                name: user.name, rating: rat, comment: descr
            }, { 
                headers: { authorization: `Bearer ${user.token}` } 
            })
            alert("Ваш отзыв отправлен!Через мгновение люди смогут увидеть его!")
            setIsOpen(false)
            setDescr("")
            setRat(0)
        } catch (err) {
            console.log(err.message);
            setIsOpen(false)
        }
    }
    const resetForm = async (e) => {
        setRat(0)
        setDescr("")
        setIsOpen(false)
    }

    if (isOpen === false) {
        return null
    } else {
        return (
            <div className='review-popup__wrapper'>
                <div className='review-popup'>
                    <div className='review-popup__top'>
                        <h5 className='review-popup__title'>
                            Написать отзыв
                        </h5>
                        <button className='review-popup__close'
                            onClick={() => setIsOpen(false)}>
                            <RxCross1 fontSize={26} color="red" />
                        </button>
                    </div>
                    <h5 className='review-popup__subtitle'>
                        {user.name}, поделитель своим мнением о товаре!
                    </h5>
                    <form className='review-popup__form' onSubmit={handleSubmit}>
                        <StarsRating style={{ width: 10 }}
                            value={rat}
                            onChange={rat => setRat(rat)}
                        />
                        <div className='review-popup__item'>
                            <p className='review-popup__form-name'>
                                Комментарий
                            </p>
                            <textarea placeholder='Напишите ваш комментарий' className='review-popup__form-textarea'
                                value={descr} onChange={e => setDescr(e.target.value)} required />
                        </div>
                        <div className='review-popup__buttons'>
                            <button
                                className='review-popup__reset'
                                type="button"
                                onClick={resetForm}
                            >
                                ОТМЕНИТЬ
                            </button>
                            <button
                                type='submit'
                                className='review-popup__btn'
                            >
                                ДОБАВИТЬ ОТЗЫВ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewPopup
