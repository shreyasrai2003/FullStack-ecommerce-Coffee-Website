import React from 'react'
import './Offers.css'
import latte from '../Assets/latte.jpg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Seller Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={latte} alt=''/>
      </div>
    </div>
  )
}

export default Offers
