import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) =>{
    
    const [counter, setCounter] = useState(0);
    
    const handleAdd = ()=>{
        setCounter(counter +1);
        /*  Otra manera de modificar le counter es
            Retorna el nuevo valor del counter esto se utiliza
            si no hay acceso as valor counter
        setCounter((counter)=> counter +1);
        */
    }

    const handleRest = ()=>{
        setCounter(counter -1);
    }

    const reset = () =>{
        setCounter(value);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleRest}>-1</button>
            <button onClick={reset}>reset</button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;