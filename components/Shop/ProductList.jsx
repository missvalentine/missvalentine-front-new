import React from 'react'
import { useSelector } from 'react-redux'
import { Zoom } from 'react-reveal'

import ProductCard from '../ProductCard'

const ProductList = (props) => {
  const {
    products = [],
    mode = 'cart',
    cardCallback,
    selectedProducts = [],
    isAddToCartOption = true,
    isWishlistOption = true,
  } = props

  return (
    <Zoom bottom>
      <div className={`row ${mode == 'enquiry' && 'pt-3 px-2'}`}>
        {products?.map((product, index) => (
          <div
            key={`ProductList${index}${product.name}`}
            className={`${
              mode == 'enquiry' ? 'col-6' : ' col-sm'
            } col-md-4 col-lg-3 `}
          >
            <ProductCard
              callback={cardCallback}
              mode={mode}
              product={product}
              isDisabled={mode == 'enquiry'}
              isWishlistOption={isWishlistOption}
              isAddToCartOption={isAddToCartOption}
              isAdded={
                selectedProducts
                  ? selectedProducts.find(
                      (_product) => _product === product._id,
                    )
                  : [].find((_product) => _product._id == product._id)
              }
            />
          </div>
        ))}
      </div>
    </Zoom>
  )
}

export default ProductList
