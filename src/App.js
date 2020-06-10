import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

// Challenge 7 - Import your exported data into the App component. 
import data, { categoriesUnique, categoryCounts, objInventory } from './data';

function App() {
  categoriesUnique.sort()
  const categories = categoriesUnique.map((category) => {
      return <button class='category'>{category}</button>
    }
  )

  const inventory = data.map( (product) => {
      return <Product data={product}/>
      // return <div className="product"> { name } { price } { description} { category}</div>
    }
  )

  return (
    <div>
      <div class='categories'>{categories}</div>
      <div className='ProductList'>{inventory}</div>
    </div>
  )
}

export default App;
