import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CartNavbar from '../components/Cart/CartNavbar'
import CartTotal from '../components/Cart/CartTotal'
import withBaseLayout from '../components/Layout/BaseLayout'
import AddressesView from '../components/UserDashboard/AddressesView'
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
            <div className="col-md-7 pl-5">
              <h5>Select Delivery Address</h5>
              <br />
              <AddressesView isSelectable />
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
