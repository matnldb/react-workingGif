import React from 'react'
import { useFetcGifs } from '../Hooks/useFetcGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria}) => {
    
    const {data, cargando} = useFetcGifs(categoria)    
    return (
        <>
           <h3>{categoria}</h3> 
           {cargando&&<p>Cargando...</p>}
            <div className="card-grid">
                {
                    
                    data.map(imagen=><GifGridItem 
                                key = {imagen.id}
                                imagen = {imagen}
                            />)
                } 
            </div>
        </>        
    )
}                  
