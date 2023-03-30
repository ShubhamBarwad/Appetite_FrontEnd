import React from 'react'
import Dish from './Dish'

function Dishes() {
  return (
    <div className='page level-2 flex-col justify-content-center align-items-start gap-2'>
        <div className='menu-title-filter flex-row justify-content-between align-items-center wrap gap-1'>
          <p className="level-1 strong">CHECKOUT OUT OUR MENU</p>
          <div className='menu-filter flex-row justify-content-between align-items-center gap-4'>
              <p className="level-4 font-light active pointer">Relevance</p>
              <p className="level-4 font-light pointer">Rating</p>
              <p className="level-4 font-light pointer">Price: Low to High</p>
              <p className="level-4 font-light pointer">Price: High to Low</p>
          </div>
        </div>

        <div className="flex-row justify-content-center align-items-start wrap gap-2">
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
            <Dish/>
        </div>
    </div>
  )
}

export default Dishes