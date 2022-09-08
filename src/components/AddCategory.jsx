import React, { useState } from "react"

export const AddCategory = ( { onNewCategory } )  => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const valueNew = inputValue.trim();
        if (valueNew.length <= 1) return;
        onNewCategory(valueNew);
        //setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');
        
    }

    return (
        <form onSubmit={ onSubmitForm }>
            <h1> Add Category </h1>
            <input
                type="text"
                placeholder=" Buscar gifs "
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}