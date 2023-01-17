import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { TiDelete } from 'react-icons/ti'
import './Create.scss'

const CreateProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState('')
    const [images, setImages] = useState([])
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [descr, setDescr] = useState('')
    const [discount, setDiscount] = useState(0)
    const [features, setFeatures] = useState([]);

    const addFeatures = () => {
        setFeatures([...features, { name: '', text: '', number: Date.now() }])
    }

    const changeFeatures = (key, value, number) => {
        setFeatures(features.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const removeFeatures = (number) => {
        setFeatures(features.filter((i) => i.number !== number))
    }

    const uploadFileHandler = async (e, forImages) => {
        const file = e.target.files[0]
        const bodyFormData = new FormData();
        bodyFormData.append('file', file)
        try {
            const { data } = await axios.post('/api/upload', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (forImages) {
                setImages([...images, data.secure_url])
            } else {
                setImage(data.secure_url)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const deleteFileHandler = async (fileName) => {
        setImages(images.filter((x) => x !== fileName))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/products', {
                name, image, brand, category, price,
                descr, discount, features, slug, images
            },)
            console.log("Success");
        } catch (err) {
            console.log(err);
        }
        finally {
            navigate('/')
        }
    }

    return (
        <div className='create'>
            <form className='create__form' onSubmit={handleSubmit}>
                <h1 className='create__form-title'>Создайте новый продукт</h1>
                <Input value={name} onChange={e => setName(e.target.value)}
                    type="text" name="Имя товара" placeholder='Введите имя товара' required />
                <Input value={slug} onChange={e => setSlug(e.target.value)}
                    type="text" name="Введите уникальную строку"
                    placeholder='Введите уникальную строку товара' required />
                <Input value={image} onChange={() => { }}
                    type="text" name="Выберите изображение товара ниже"
                    placeholder='Здесь появиться ссылка из облака' />
                <Input onChange={uploadFileHandler}
                    type="file" name="Изображения товара"
                    placeholder='Здесь появиться ссылка из облака' />
                {images.length === 0 && <h2>Нету дополнительных изображений</h2>}
                {images.map((x) => (
                    <div key={x} className="create__form-images">
                        <p className="create__form-images-text">{x}</p>
                        <button className='create__form-delete' type='button'
                            onClick={() => deleteFileHandler(x)}>
                            <TiDelete fontSize={24} color="red" />
                        </button>
                    </div>
                ))}
                <Input onChange={(e) => uploadFileHandler(e, true)}
                    type="file" name="Дополнительные изображения"
                    placeholder='Здесь появиться ссылка из облака' />
                <Input value={brand} onChange={e => setBrand(e.target.value)}
                    type="text" name="Бренд"
                    placeholder='Введите бренд товара' required />
                <Input value={category} onChange={e => setCategory(e.target.value)}
                    type="text" name="Категория"
                    placeholder='Введите категорию товара' required />

                <div className='create__form-item'>
                    <p className='create__form-name'>
                        Описание
                    </p>
                    <textarea placeholder='Введите описание товара' className='create__form-textarea'
                        value={descr} onChange={e => setDescr(e.target.value)} required />
                </div>
                <Input value={price} onChange={e => setPrice(e.target.value)}
                    type="text" name="Цена"
                    placeholder='Введите цену товараа' required />
                <Input value={discount} onChange={e => setDiscount(e.target.value)}
                    type="text" name="Скидка (введите число от 0 до 1)"
                    placeholder='Введите скидку на товар' required />
                <div className='create__form-item'>
                    <p className='create__form-name'>
                        Характеристики товара
                    </p>
                    {features.map((i) => (
                        <div className='create__form-input-wrapper' key={i.number}>
                            <input type="text" className='create__form-input'
                                placeholder='Имя'
                                onChange={(e) => changeFeatures('name', e.target.value, i.number)} />
                            <input type="text" className='create__form-input'
                                placeholder='Текст'
                                onChange={(e) => changeFeatures('text', e.target.value, i.number)} />
                            <button className='create__form-delete' type='button'
                                onClick={() => removeFeatures(i.number)}>
                                <TiDelete fontSize={24} color="red" />
                            </button>
                        </div>
                    ))
                    }
                    <button type='button' className='create__form-features'
                        onClick={addFeatures}>
                        Добавить
                    </button>
                </div>
                <button className='create__form-button' type='submit'>
                    Создать товар
                </button>
            </form >
        </div >
    )
}

export default CreateProduct
