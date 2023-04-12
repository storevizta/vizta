
export const Post = () => {
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
                        <label className={s.Text}>Plataformas:</label>
                        
                        
                         <select onChange={e => handlerSelectPlatforms(e)}>
                            <option hidden value="default">Selecciona tus Plataformas...</option>
                        {platformsApi.map((el, i) =>( 
                            <option key={i} value={el}>{el}</option>)
                        )}
                        </select>
                       
                    </div>
                    <div>
                        {errors.platforms&&(<p className={s.TextContainer}>{errors.platforms}</p>)}     
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
                    <div></div>
                        {errors.image&&(<p className={s.TextContainer}>{errors.image}</p>)} 
                    
                    <div className={s.divCardContainer}>
                        <label className={s.Text}>Géneros:</label>
                        <select onChange={e => handlerSelectGenres(e)}>
                        <option hidden value="default">Selecciona tus generos...</option>
                        {Allgenres.map((el) =>( 
                            <option key={el.id} value={el.name}>{el.name}</option>)
                        )}
                        </select>
                      
                    </div>
                    <div>
                        {errors.genres&&(<p className={s.TextContainer}>{errors.genres}</p>)}
                    </div>
                    </div>
                    </div>
                    <Link to='/home'><button className={s.button}>Volver</button></Link>
                    <button type="submit" className={s.buttons} disabled={!input.genres.length || !input.platforms.length}>Crear Videojuego</button>
    
                </form>
            </div>
                <div className={s.divPadre}>
                {   input.platforms.length > 0 ? (
                    <div className={s.divHijo1}>
                        <p className={s.Text}>Listado de Plataformas</p>
                        <div className={s.divHijo2}>
                        { input.platforms.map( (e, id) =>
                            <div className={s.divHijo3} key={id}>
                                <button className={s.divButton} onClick={()=> {handlerDeletePlatforms(e)}}>X</button>
                                <p className={s.Text}>{e}</p>
                            </div>
                            )}
                        </div>
                     </div>           
                     ): null}   
                {   input.genres.length > 0 ? (
                    <div className={s.divHijo1}>
                        <p className={s.Text}>Listado de Géneros</p>
                        <div className={s.divHijo2}>
                         { input.genres.map((e, id) =>
                            <div className={s.divHijo3} key={id}>
                                <button className={s.divButton} onClick={()=> {handlerDeleteGenres(e)}}>X</button>
                                <p className={s.Text}>{e}</p>
                            </div>
                            )}
                        </div>
                    </div>           
                    ): null}
                </div>
        </div>
    </div>
          )
    }
