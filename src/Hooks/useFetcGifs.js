import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";

 
 export const useFetcGifs = (categoria) => {
     
    const [estado, setEstado] = useState({data:[],cargando:true});
    useEffect(()=>{
                getGifs(categoria).then(imagen =>{
                                        setTimeout(()=>{
                                            setEstado({
                                                data : imagen,
                                                cargando : false
                                            })                                            
                                        },3000)
                                        })
                 },[categoria])                
    return estado;
}

//  useEffect(()=>{
//     getGifs(categoria)
//         .then(imagen => setImagenes(imagen));
//         //cuando en una funcion su argumento es mandado como argumento al callback bastaria con
//         //llamar al callback-----> .then(setImagenes);
// },[categoria]);    

 