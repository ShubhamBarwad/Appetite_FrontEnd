import React from 'react'
import Image from 'next/image'
import dishImg from '@/pages/components/resources/burger_platter.jpg'

function Dish({dish}) {
  let tag = dish.tag;
  const isRecommended = () => {
    if(tag == 'recommended' && tag != null){
      return true
    }else return false
  }
  const isBest = () => {
    if(tag == 'best seller' && tag != null){
      return true
    }else return false
  }
  return (
    <div className='card align-items-stretch justify-content-start flex-col gap-1'>

      {isRecommended() && <div className="card-banner recommended">
        <p className='level-5'>Recommended</p>
      </div>}
      
      {isBest() && <div className="card-banner best-seller">
        <p className="level-5">Best Seller</p>
      </div>}

      <img className='card-image' src={dish.photo}/>
      <div>
        <p className='level-3 strong'>{dish.name}</p>
        <p className='level-5 font-light'>{dish.cuisine}</p>
      </div>
      
      <p className='level-3 strong'><span className='rupee-symbol'>₹</span>{dish.price}</p>
      <div>
        <div className='flex-row align-items-center justify-content-between'>
          <div className="ratings-box flex-row align-items-center justify-content-center">
            <i className="fi fi-ss-star stars level-4"></i>
            <p className='level-5 font-light'>{dish.rating}</p>
          </div>
          <p className='level-5'>-</p>
          <p className='level-5 font-light'>~ {dish.time} MINS</p>
          <p className='level-5'>-</p>
          <button className="level-3 strong add-to-cart pointer">+</button>
        </div>
      </div>
    </div>
  )
}

export default Dish