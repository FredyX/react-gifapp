import React, { useState } from 'react';

const AddCategory = ({setCategoria}) => {

    const [inputValue, setInputValue] =  useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategoria(categoria =>[inputValue, ...categoria]);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    );
}

export default AddCategory;