import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'
import ProductList from '../components/Shop/ProductList'

const Wishlist = (props) => {
  const dispatch = useDispatch()
  const wishist = useSelector((state) => state.authState.user.wishist)

  return (
    <div>
      {/* <TopBanner title="My Wishlist" subtitle="Wishlist" /> */}
      <section className="ftco-section ftco-cart">
        <div className="container">
          <ProductList />
        </div>
      </section>
    </div>
  )
}

export default withBaseLayout(Wishlist)
