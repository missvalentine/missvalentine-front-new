import React from 'react'
import CartItemCard from './CartItemCard'

const CartProductListView = (props) => {
  const { products } = props
  return (
    <div className=" ftco-animated fadeInUp">
      <div className="cart-list">
        {products?.map((cartItem, index) => {
          const product = cartItem.product
          return (
            <CartItemCard
              imgSrc={product?.images[0]?.data}
              name={product?.name}
              category={product?.category}
              productId={product._id}
              price={product.price}
              quantity={cartItem.quantity}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CartProductListView
