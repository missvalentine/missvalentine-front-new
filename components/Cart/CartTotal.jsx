import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {
  const cartState = useSelector((state) => state.cartState)
  const subTotal = cartState.products
    .map((cartItem) => cartItem.quantity * cartItem.price)
    .reduce((partialSum, a) => partialSum + a, 0)

  return (
    <div className="w-100  cart-wrap ftco-animated fadeInUp">
      <div className="cart-total mb-3">
        <h3>Cart Totals</h3>
        <p className="d-flex mb-1">
          <span>Subtotal</span>
          <span className="text-right">&#8377;{subTotal}</span>
        </p>
        <p className="d-flex  mb-1">
          <span>Delivery</span>
          <span className="text-right">&#8377;65.00</span>
        </p>
        <p className="d-flex  mb-1">
          <span>Discount</span>
          <span className="text-right">&#8377;130.00</span>
        </p>
        <hr />
        <p className="d-flex total-price text-dark">
          <span>
            <strong>Total</strong>
          </span>
          <span className="text-right">
            <strong>&#8377;17.60</strong>
          </span>
        </p>
      </div>
      <p className="text-center">
        <Link href="/checkout">
          <a className="btn btn-primary-2 w-100 py-3 px-4">Continue</a>
        </Link>
      </p>
    </div>
  )
}
export default CartTotal
