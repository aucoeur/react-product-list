import React from 'react';
import data from './data.json' // imports data.json

function Categories() {
    const categories = data.map(( { category }, i ) => {
        
        return (
            <li> {category}</li>
        )
    })

    return (
        <ul>
            {categories}
        </ul>
    )
}

export default Categories;