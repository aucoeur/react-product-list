import React, { useState } from 'react';
import { categoriesUnique } from '../data';

function Button({category}) {

    return <button 
            className='category' 
            value={category}> {category}
        </button>
}

export default Button;