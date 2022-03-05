import React from 'react'
import ProductListView from '../components/Cart/ProductListView';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const Cart=(props)=> {
  return (
    <div> 
      <TopBanner title="My Wishlist" subtitle="Wishlist"/>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <ProductListView />
        </div>
      </section>
    </div>
  )
}

export default withBaseLayout(Cart); 
