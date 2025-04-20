import React from 'react'
import FoodItem from './FoodItem'

function FoodList({content, setId}) {
  return (
    <div>
        {content.map((val) => <FoodItem food={val} key={val.id} setId = {setId}/>)}
    </div>
  )
}

export default FoodList