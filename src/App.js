import React from 'react';
import logo from './logo.svg';
import './App.css';

// Challenge 7 - Import your exported data into the App component. 
import data, { categoriesUnique, categoryCounts, objInventory } from './data';

function App() {
    const items = objInventory.map(({name, count}) => {
      return <li>{name}: {count}</li>
    }
  )

  return (
    <ul> {items}</ul>
  )
}

export default App;
