/**
 * Hay 2 tipos de componentes basados en :
 *  - Clases
 *  - Funciones
 * 
 * Ahora denominados funcional components antes se llamaban SFC por que no
 * podian manejar estados.
 */
import React from 'react';
import PropTypes from 'prop-types';
const PrimerComp = ({saludo, subtitulo}) =>{
    return(
        <>
            <h1>{saludo}</h1>
            <h2> {subtitulo} </h2>
        </>
    ); 
}
PrimerComp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerComp.defaultProps ={
    subtitulo: 'subtitulo defecto'
}

export default PrimerComp;