import React from 'react'
import Image from 'next/image'
import dishImg from '@/pages/components/resources/burger_platter.jpg'

function Dish() {
  return (
    <div className='card align-items-stretch justify-content-start flex-col gap-1'>
      <Image className='card-image' src={dishImg}/>
      <div>
        <p className='level-3 strong'>Burger Meal</p>
        <p className='level-5 font-light'>American</p>
      </div>
      
      <p className='level-3 strong'><span className='rupee-symbol'>₹</span> 250</p>
      <div>
        <div className='flex-row align-items-center justify-content-between'>
          <div className="ratings-box flex-row align-items-center justify-content-center">
            <i className="fi fi-ss-star stars level-4"></i>
            <p className='level-5 font-light'>4.0</p>
          </div>
          <p className='level-5'>-</p>
          <p className='level-5 font-light'>~ 25 MINS</p>
          <p className='level-5'>-</p>
          <nutton className="level-3 strong add-to-cart pointer">+</nutton>
        </div>
      </div>
    </div>
  )
}

export default Dish