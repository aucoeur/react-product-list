import React, {useState} from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Button from './components/Button'

// Challenge 7 - Import your exported data into the App component. 
import { categoriesUnique } from './data';


function App() {
  const [ currentCategory, setCategory ] = useState('All')

  function getCategory(newValue) {
    setCategory(newValue)
  }

  function resetState() {
    setCategory('All')
  }

  const categories = categoriesUnique.map((category, i) => {

      return <Button category={category} id={category} key={i} value={category} onClick={getCategory}
        />

    }
  )


  return (
    <div>
      <div className='categories'>
        <button value="All" onClick={resetState}>ALL CATEGORIES</button>
        {categories}
      </div>
      <div className="ProductList">
        <ProductList currentCategory={currentCategory} />
      </div>
    </div>
  )
}

export default App;
