import React from 'react'
import './Popular.css'
import summer from '../Assets/summer.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Summers</h1>
      <hr/>
      <div className="popular-item">
        {summer.map((item,i)=>{
            return <Item className="item" key={i} id={item.id} name={item.name} image={item.image} price={item.price}></Item>
        })}
      </div>
    </div>
  )
}

export default Popular
