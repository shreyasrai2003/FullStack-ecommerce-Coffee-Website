import React from 'react'
import Offers from '../components/Offers/Offers'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Popular from '../components/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Popular/>
      <Offers/>
      <ProductDisplay/>
    </div>
  )
}

export default Shop
