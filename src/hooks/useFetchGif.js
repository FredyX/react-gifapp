import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGift";

export const useFetchGif = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{
        getGifs(categoria)
            .then((images) => {
                setState({data: images, loading: false});
            });
    }, [categoria]);

    return state;
}