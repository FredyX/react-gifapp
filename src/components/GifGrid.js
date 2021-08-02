//import React, { useState, useEffect} from 'react';
import GifGridItem from './GrifGridItem';
//import { getGifs } from '../helpers/getGift';
import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';

const GifGrid = ({categoria}) => {

    const {data: images, loading} = useFetchGif(categoria);
    //const [image, setImage] = useState([]);
    
    //useEffect(() => {
      //  getGifs(categoria)
        //    .then(setImage)
    //}, [categoria]);
    //Si la categoria cambia se necesita volver a ejecutar este efecto    
    return(
        <>
            <h3>{categoria}</h3>
            {loading && <p>Cargando</p>}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>            
        </>
    );
}

export default GifGrid;