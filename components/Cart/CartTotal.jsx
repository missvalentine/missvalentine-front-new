import Link from 'next/link'
import React from 'react'

const CartTotal = () => {
  return (
    <div className="row justify-content-end">
      <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animated fadeInUp">
        <div className="cart-total mb-3">
          <h3>Cart Totals</h3>
          <p className="d-flex">
            <span>Subtotal</span>
            <span>$20.60</span>
          </p>
          <p className="d-flex">
            <span>Delivery</span>
            <span>$0.00</span>
          </p>
          <p className="d-flex">
            <span>Discount</span>
            <span>$3.00</span>
          </p>
          <hr />
          <p className="d-flex total-price">
            <span>Total</span>
            <span>$17.60</span>
          </p>
        </div>
        <p className="text-center">
          <Link href="/checkout">
            <a className="btn btn-primary py-3 px-4">Proceed to Checkout</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
export default CartTotal
