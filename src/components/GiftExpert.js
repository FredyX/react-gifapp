import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
const GiftExpert = () => {

    const [categoria,setCategoria] = useState(['One Punch']);
/*
    const handleAdd = (e) => {
        setCategoria([...categoria, 'HunterXhunter']);
        //el parametro es el valor del estado anterior del hooke
        //setCategoria( cats => [...cats, 'HunterXHunter']);
    }
*/
    return(
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategoria={setCategoria} />
            <hr />
            <ol>
                {
                    categoria.map( categoria => 
                    (<GifGrid 
                        categoria={categoria}
                        key={categoria}
                      />
                    ))
                }
            </ol>
        </>
    );
}

export default GiftExpert;