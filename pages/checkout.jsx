import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CartNavbar from '../components/Cart/CartNavbar'
import CartTotal from '../components/Cart/CartTotal'
import BillingDetails from '../components/Checkout/BillingDetails'
import CheckoutDetails from '../components/Checkout/CheckoutDetails'
import withBaseLayout from '../components/Layout/BaseLayout'
import { projectName } from '../constant/projectSetting'
import { getUserAction } from '../redux/actions/authActions'

const Checkout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAction())
  }, [])

  return (
    <div>
      <Head>
        <title>{`Billing | ${projectName}`}</title>
      </Head>
      <CartNavbar status={2} />
      <section className="ftco-section-2 ftco-cart">
        <div className="container">
          <section className="d-flex justify-content-between">
            <div className="col-md-7">
              <CheckoutDetails
              // products={cartState.products}
              />
            </div>
            <div className="col-md-4">
              <CartTotal />
            </div>
          </section>
        </div>
      </section>
      <BillingDetails />
    </div>
  )
}

export default withBaseLayout(Checkout)
