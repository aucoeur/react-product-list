import React from 'react';
// import { categoriesUnique } from '../data';

function Button(props) {
    const {category, value, onClick} = props
    function getCategory(event) {
        onClick(event.target.value);
    }
    return <button 
            className='category' 
            value={value}
            onClick={getCategory}> 
                {category}
            </button>
}

export default Button;