import React from 'react'
import Image from 'next/image'

import ProductCard from '../ProductCard'
import { Slide } from 'react-reveal'
import DisplayCard from '../CustomComponents/DisplayCard'
import { useSelector } from 'react-redux'

const ProductSection = (props) => {
  const { productList, containerClassName, heading, subHeading } = props
  const allProducts = productList || useSelector((state) => state.productListState.allProducts);

  return (
    <DisplayCard
      id="product"
      subHeading={subHeading || 'Our Products'}
      heading={heading || 'Products'}
      containerClassName={containerClassName}

    >
      <div className="row">
        {allProducts?.slice(0, 4).map((product, index) => (
          <Slide  key={product.name} bottom>
            <div className="col-sm col-md-6 col-lg">
              <ProductCard
                product={product}
              />
            </div>
          </Slide>
        ))}
      </div>
    </DisplayCard>
  )
}

export default ProductSection
