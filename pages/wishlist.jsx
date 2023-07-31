import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCard from '../components/CustomComponents/EmptyCard'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'
import ProductList from '../components/Shop/ProductList'

const Wishlist = (props) => {
  const dispatch = useDispatch()
  const wishist = useSelector((state) => state.authState.user.wishlist)
  const allProducts = useSelector((state) => state.productListState.allProducts)

  const productsList = wishist?.map(
    (pid) => pid in allProducts && allProducts[pid],
  )
  console.log('productsList', wishist, allProducts, productsList)
  return (
    <div>
      {/* <TopBanner title="My Wishlist" subtitle="Wishlist" /> */}
      {productsList?.length > 0 ? (
        <section className="ftco-section-4 ftco-cart">
          <div className="container">
            <div className="d-flex align-items-baseline mb-3">
              <h4>My Wishlist </h4>
              &nbsp; &nbsp;
              <span>{productsList?.length} items</span>
            </div>
            <ProductList
              mode="wishlist"
              products={productsList}
              isWishlistOption={false}
            />
          </div>
        </section>
      ) : (
        <section className="my-5 ftco-section ftco-cart">
          <EmptyCard
            title={"It's Look like your wishlist is empty"}
            subtitle={"Looks like you haven't added anything to your cart"}
            actionText="Add Item from Shop"
          />
        </section>
      )}
      <hr />
    </div>
  )
}

export default withBaseLayout(Wishlist)
