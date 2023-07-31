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
              key={cartItem?.name}
              imgSrc={product?.images ? product?.images[0]?.data : null}
              name={product?.name}
              category={product?.category}
              productId={product._id}
              price={cartItem.price}
              quantity={cartItem.quantity}
              color={cartItem.color}
              size={cartItem.size}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CartProductListView
