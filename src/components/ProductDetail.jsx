import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
const {id} =useParams()
productos.find((p) => p.id ===id)
    return (
    <div></div>
  )
}

export default ProductDetail