import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CartNavbar from '../components/Cart/CartNavbar'
import CartTotal from '../components/Cart/CartTotal'
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
      <section className="ftco-section-2 ftco-cart pb-6">
        <div className="container">
          <section className="d-flex justify-content-between">
            <div className="col-md-7">
              <CheckoutDetails />
            </div>
            <div className="col-md-4">
              <CartTotal />
            </div>
          </section>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default withBaseLayout(Checkout)
