import React from 'react'
import { useSelector } from 'react-redux'
import { Zoom } from 'react-reveal'
import '../../styles/components/ProductList.module.scss'

import ProductCard from '../ProductCard'

const ProductList = (props) => {
  const { products } = props

  return (
    <Zoom bottom>
      <div className="row">
        {products?.slice(0, 12).map((product, index) => (
          <div key={product.name} className="col-sm col-md-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Zoom>
  )
}

export default ProductList
