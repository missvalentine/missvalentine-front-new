import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartNavbar from '../components/Cart/CartNavbar'
import CartProductListView from '../components/Cart/CartProductListView'
import CartTotal from '../components/Cart/CartTotal'
import EmptyCard from '../components/CustomComponents/EmptyCard'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'
import { getAllCartItem } from '../redux/actions/cartActions'

const Cart = (props) => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartState)
  useEffect(() => {
    dispatch(getAllCartItem())
  }, [])

  return (
    <div>
      <Head>
        <title>{`SHOPPING BAG`}</title>
      </Head>
      {cartState.cartLength ? <CartNavbar status={1} /> : <hr />}
      {/* <TopBanner title="My Cart" subtitle="Cart" /> */}
      {cartState.cartLength ? (
        <section className="ftco-section-2 ftco-cart mb-6">
          <div className="container">
            <section className="d-flex justify-content-between">
              <div className="col-md-7">
                <CartProductListView products={cartState.products} />
              </div>
              <div className="col-md-4">
                <CartTotal />
              </div>
            </section>
          </div>
        </section>
      ) : (
        <section className="my-5 ftco-section ftco-cart">
          <EmptyCard
            title={'Your Cart is Empty'}
            subtitle={"Looks like you haven't added anything to your cart"}
          />
        </section>
      )}
      <hr />
    </div>
  )
}

export default withBaseLayout(Cart)
