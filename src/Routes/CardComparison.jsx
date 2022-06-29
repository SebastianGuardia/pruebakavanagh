import React from 'react'
import Comparison from '../components/Comparisons'
import ProductsCards from '../components/ProductsCards'
import Footers from '../components/Footers'
import '../index.css'
import NavbarPro from '../components/NavbarPro'

const CardComparison = () => {
  return (
    <>
    <NavbarPro/>
    <ProductsCards/>
    <Comparison/>
    <Footers/>
    </>
  )
}

export default CardComparison