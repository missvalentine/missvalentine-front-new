import React from 'react'
import Image from 'next/image'

import ProductCard from '../ProductCard'
import { Slide } from 'react-reveal'
import DisplayCard from '../CustomComponents/DisplayCard'
import { useSelector } from 'react-redux'

const ProductSection = (props) => {
  const { containerClassName, heading, subHeading } = props
  const allProducts = useSelector((state) => state.productListState.allProducts)

  return (
    <DisplayCard
      id="product"
      subHeading={subHeading || 'Our Products'}
      heading={heading || 'Products'}
      containerClassName={containerClassName}

    >
      <div className="row">
        {allProducts?.slice(0, 4).map((product, index) => (
          <Slide bottom>
            <div className="col-sm col-md-6 col-lg">
              <ProductCard
                productName={product.name}
                slug={product.slug}
                imageSrc={product.images[0].data}
              />
            </div>
          </Slide>
        ))}
      </div>
    </DisplayCard>
  )
}

export default ProductSection
