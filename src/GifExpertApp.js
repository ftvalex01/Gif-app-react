import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories)

    

  return (
      <>
      <div className='container'>
      <h2 className='header'>GifExpertApp</h2>
      <AddCategory  setCategories={setCategories}></AddCategory>
      <hr/>
      </div>
      <ol>
          {categories.map(category =>{
              return <GifGrid key={category} category={category}/>
          })}
      </ol>
      </>
  )
}

export default GifExpertApp