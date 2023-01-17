import axios from 'axios';
import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import './Create.scss'


const CreateNews = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState('')
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

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
            const { data } = await axios.post('/api/news', {
                title, img: image, images, descr
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
                <h1 className='create__form-title'>Создайте новость</h1>
                <Input value={title} onChange={e => setTitle(e.target.value)}
                    type="text" name="Заголовок" placeholder='Введите заголовок' required />
                <Input value={image} onChange={() => { }}
                    type="text" name="Выберите изображение для новости ниже"
                    placeholder='Здесь появиться ссылка из облака' />
                <Input onChange={uploadFileHandler}
                    type="file" name="Изображения новости"
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
                    type="file" name="Дополнительные изображения" />
                <div className='create__form-item'>
                    <p className='create__form-name'>
                        Описание новости
                    </p>
                    <textarea placeholder='Введите текст новости' className='create__form-textarea news'
                        value={descr} onChange={e => setDescr(e.target.value)} required
                    />
                </div>
                <button className='create__form-button' type='submit'>
                    Создать новость
                </button>
            </form >
        </div >
    )
}

export default CreateNews
