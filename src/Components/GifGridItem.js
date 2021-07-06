import React from 'react'

export const GifGridItem = ({imagen}) => {
    
    return (
        <div className='card'>
            <img src={imagen.url} alt = {imagen.title}/>             
             <p>{imagen.title}</p>
        </div>
    )
}
