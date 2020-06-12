import React from 'react';
import './Button.css';
// import { categoriesUnique } from '../data';

function Button(props) {
    const { category, value, onClick, count } = props
    function getCategory(event) {
        onClick(event.target.value);
    }
    return <button 
            className={`category`} 
            value={value}
            onClick={getCategory}> 
                {category}  
                <div className="badge">{count}</div>
            </button>
}

export default Button;