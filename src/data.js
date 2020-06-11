import React from 'react';
import data from './data.json' // imports data.json

// Challenge 1 - Get the array of products.
// Challenge 2 - Get a list of all categories.
const categories = data.map(( { category }, i ) => {
    return (
        category
    )
})

// Challenge 3 - Make the categories list a list of unique values.
const setCategories = new Set(categories) // Set returns unique values only
const categoriesUnique = Array.from(setCategories).sort() // Make an array from set, sort alphabetically

// alt way to copy & sort, since sort transforms OG data
    // const copy = [...categoriesUnique]
    // copy.sort()

// console.log(categoriesUnique)

// Challenge 4 - Make an Object whose keys are the names of categories and whose values are the number of times that category appears in the data.
const categoryCounts = data.reduce(( item, {category}) => {
    if (item[category] !== undefined) {
        item[category] += 1
    } else {
        item[category] = 1
    }
    return item
    }, {} // set init value to {} 
    )
    // console.log(categoryCounts)

// Challenge 5 - Use Reduce to make an array of objects that have a name and a count. This array will be similar to Challenge 4 but in a different format. For this list all of the names should be unique and each should only appear once!

// const objInventory = Object.entries(categoryCounts) // can we do like this??
const objInventory = Object.entries(categoryCounts).reduce((arr, entry) => {
    const [key, value] = entry
    arr.push({name: key, count: value})
    return arr
}, [])
// console.log(objInventory)

const inventory = data.map( ({name, category, description, price, id}) => {
      return <div className="product"> { name } { price } { description} { category}</div>
    }
  )

// Challenge 6 - Export all of the data you have collected.
export default data;
export { categoriesUnique, categoryCounts, objInventory, inventory }