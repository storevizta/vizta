import styled from 'styled-components';
import { useState } from 'react';

export const Post = () => {

    const {task, setTask} = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        image: "",
    })




  return (
    <div className={s.backGround}>
        <div className={s.divContainerAll}>
            <div className={s.divContainer}>
                <div>
                <h1 className={s.Title}>Creá tu Publicación</h1>
    
                </div>
                <form onSubmit={e => handlerSubmit(e)}>
                <div>
                    <div className={s.firstColumn}>
                    <div className={s.divCardContainer}>
                        <label className={s.Text}> Título:</label>
                        <input
                        type='text'
                        value={input.name}
                        name='name'
                        placeholder='Auto'
                        onChange={e => handlerChange(e)}
                        required={true}
                        />
                    </div>
                    <div className={s.right}>
                        {errors.name&&(<p className={s.TextContainer}>{errors.name}</p>)}               
                    </div>
    
                    <div className={s.divCardContainer}>
                        <label className={s.Text}>Description:</label>
                        <input
                        type='text'
                        value={input.description}
                        name='description'
                        placeholder='Enter a description'
                        onChange={e => handlerChange(e)}
                        required={true}
                        />
                    </div>
                    <div>
                    {errors.description&&(<p className={s.TextContainer}>{errors.description}</p>)} 
                    </div>
    
                    <div className={s.divCardContainer}>
                        <label className={s.Text}>Price:</label>
                        <input
                        type='number'
                        value={input.released}
                        name='price'
                        onChange={e => handlerChange(e)}
                        required={true}
                        />
                    </div>
                    <div>
                        {errors.released&&(<p className={s.TextContainer}>{errors.released}</p>)} 
                    </div>
    
                    <div className={s.divCardContainer}>
                        <label className={s.Text}>Stock:</label>
                        <input
                        type='number'
                        value={input.rating}
                        name='rating'
                        placeholder='0.00 - 5.00'
                        min={0.00}
                        max={50000}
                        step={0.01}
                        onChange={e => handlerChange(e)}
                        required={true}
                        />
                    </div>
                    <div>
                        {errors.rating&&(<p className={s.TextContainer}>{errors.rating}</p>)} 
                    </div>
    
                    <div className={s.divCardContainer}>
                        <label className={s.Text}>Image:</label>
                        <input
                        type='text'
                        value={input.image}
                        name='image'
                        placeholder='Img URL'
                        onChange={e => handlerChange(e)}
                        required={true}
                        />
                    </div>
                        {errors.image&&(<p className={s.TextContainer}>{errors.image}</p>)} 
                    
                    </div>
                    </div>
                    <Link to='/home'><button className={s.button}>Volver</button></Link>
                    <button type="submit" className={s.buttons} disabled={!input.genres.length || !input.platforms.length}>Crear Publicación</button>
    
                </form>
            </div>
        </div>
    </div>
          )
    }
