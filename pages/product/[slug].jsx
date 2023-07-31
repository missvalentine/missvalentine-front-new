import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSection from '../../components/Homepage/ProductSection'
import withBaseLayout from '../../components/Layout/BaseLayout'
import ProductDetail from '../../components/ProductList/ProductDetail'
import ProductView from '../../components/ProductList/ProductView'
import { projectName } from '../../constant/projectSetting'
import {
  addProductToAllProducts,
  addProductToRecent,
} from '../../redux/actions/productListActions'
import { callApi } from '../../utils/callApi'
import { shuffleArray } from '../../utils/helperFunction'

const ProductBySlug = (props) => {
  const { product } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProductToRecent(product._id))
    dispatch(addProductToAllProducts(product))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.slug])

  const allProducts = useSelector((state) => state.productListState.allProducts)
  const productListState = Object.values(allProducts)
  const recentProductListId = useSelector(
    (state) => state.productListState.recentlyViewed,
  )
  const recentProductListState = recentProductListId?.map(
    (pid) => pid in allProducts && allProducts[pid],
  )
  return (
    <section className="">
      <Head>
        <title>{`${product.name.toUpperCase()} | ${projectName}`}</title>
      </Head>
      <ProductView product={product} />
      {/* Product's Meta data */}
      <ProductDetail product={product} />
      {/* Products you may like */}
      {productListState.length >= 3 && (
        <ProductSection
          productList={shuffleArray(productListState)}
          containerClassName="ftco-section-extra"
          heading="Products"
          subHeading="You May Like"
        />
      )}
      {/* Recent Products you may like */}
      {recentProductListState.length >= 3 && (
        <ProductSection
          productList={recentProductListState}
          containerClassName="ftco-section-extra bg-light"
          heading="Products"
          subHeading="Recently Viewed"
        />
      )}
    </section>
  )
}
export async function getStaticPaths() {
  const productResponse = await callApi({
    url: `/product/all`,
  })
  const paths = productResponse?.data?.data.map(
    (product) => `/product/${product.slug}`,
  )
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug // Get ID from slug `/book/1`

  const response = await callApi({
    url: `/product/slug?slug=${slug}`,
  })

  return {
    props: { product: response?.data?.success ? response?.data?.data : null },
  }
}

export default withBaseLayout(ProductBySlug)
