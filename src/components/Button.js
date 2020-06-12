import React from 'react';
import './Button.css';
import { categoryCounts } from '../data';
// import { categoriesUnique } from '../data';

function Button(props) {
    const { category, onClick, count } = props
    
    return <button 
            className="category"
            onClick={onClick}
            // Alternative way 
            // onClick={() => onClick(category)}
            > 
                <span className="text-center">{category}</span>
                {/* {category} */}
                <div className="badge"><span className="text-center">{count}</span></div>
            </button>
}

export default Button;