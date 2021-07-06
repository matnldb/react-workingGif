import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = ()=>{
    
    const [categorias, setCategorias] = useState(['ohtani']);   

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias ={setCategorias}/>
            <hr/>        
            <ol>
                {
                    categorias.map( categoria => 
                        // return <li key = {categoria}>{categoria}</li>
                        <GifGrid 
                            key = {categoria}    
                            categoria={categoria}
                        />
                    )
                }
            </ol>
        </>
    )
}