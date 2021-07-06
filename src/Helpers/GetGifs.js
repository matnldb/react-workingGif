
export const getGifs = async (categoria) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=4&api_key=ROCPg1RNQvpFZD0tAkPTtQJTxUeVZNIX`;
    // console.log(categoria);
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    
    const gifs = data.map( imagen =>{
        return{
            id: imagen.id,
            title: imagen.title,
            url: imagen.images?.downsized_medium.url
        }
    });
    
    return gifs;
} 