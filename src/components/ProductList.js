import React from 'react';
import data from '../data';
import Product from './Product';

function ProductList(props) {
    if (props.currentCategory === 'All') {
        return data.map((product) => {
            return <Product data={product} key={product.id}/>
        })
    } else {
        return data
            .filter((product) => {
                return product.category === props.currentCategory })
            .map((product) => {
                return <Product data={product} key={product.id}/>
            })
    }
}

export default ProductList;