import React, {useState} from 'react';
import './App.css';

import ProductList from './components/ProductList';
import Button from './components/Button'

// Challenge 7 - Import your exported data into the App component. 
import { categoryCounts, categoriesUnique } from './data';


function App() {
  const [ currentCategory, setCategory ] = useState('All')
  // passes currentCategory state as prop to ProductList to conditionally use map/filter

  function getCategory(newValue) {
    setCategory(newValue);
  }

  function resetState() {
    setCategory('All');
  }

  const categories = categoriesUnique.map((category, i) => {
      const count = categoryCounts
      // console.log(count[category])
      return <Button category={category} id={category} key={i} value={category} count={count[category]} onClick={getCategory}/>
    }
  )

  return (
    <div>
      <div className='categories'>
        <button id="All" className="category" value="All" onClick={resetState}>ALL CATEGORIES</button>
        {categories}
      </div>
      <div className="ProductList">
        <ProductList currentCategory={currentCategory} />  
      </div>
    </div>
  )
}

export default App;
