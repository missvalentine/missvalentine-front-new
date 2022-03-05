import React from 'react'
import { useSelector } from 'react-redux'
import CartTotal from '../components/Cart/CartTotal'
import ProductListView from '../components/Cart/ProductListView'
import EmptyCard from '../components/CustomComponents/EmptyCard'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'

const Cart = (props) => {
  const cartState = useSelector((state) => state.cartState)
  return (
    <div>
      <TopBanner title="My Cart" subtitle="Cart" />
      <section className="ftco-section ftco-cart">
        <div className="container">
          {cartState.cartLength ? (
            <React.Fragment>
              <ProductListView products={cartState.cart} />
              <CartTotal />
            </React.Fragment>
          ) : (
            <EmptyCard 
              title={"Your Cart is Empty"}
              subtitle={"Looks like you haven't added anything to your cart"}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default withBaseLayout(Cart)
