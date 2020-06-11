import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Button from './components/Button'

// Challenge 7 - Import your exported data into the App component. 
import data, { categoriesUnique, categoryCounts, objInventory } from './data';


function App() {
  // const [ currentCategory, setCategory ] = useState('Sports')

  const categories = categoriesUnique.map((category, i) => {

      return <Button category={category} id={category} key={i} value={category}
        />

    }
  )

  const products = data
  // .filter(product => product.category === currentCategory)
  .map((product) => {
      return <Product data={product} key={product.id}/>
      // return <div className="product"> { name } { price } { description} { category}</div>
    }
  )

  return (
    <div>
      <div className='categories'>
        {categories}
      </div>

      <div className='ProductList'>{products}</div>
    </div>
  )
}

export default App;
