import React from 'react'
import Image from 'next/image'

import ProductCard from '../ProductCard'
import { Slide } from 'react-reveal'
import DisplayCard from '../CustomComponents/DisplayCard'

const ProductSection = () => {
  return (
    <DisplayCard id="product" subHeading="Our Products" heading="Products">
      <div className='row'>
        <Slide bottom>
          <div className="col-sm col-md-6 col-lg">
            <ProductCard />
          </div>
          <div className="col-sm col-md-6 col-lg">
            <ProductCard />
          </div>
          <div className="col-sm col-md-6 col-lg">
            <ProductCard />
          </div>
          <div className="col-sm col-md-6 col-lg">
            <ProductCard />
          </div>
        </Slide>
      </div>
    </DisplayCard>
  )
}

export default ProductSection
