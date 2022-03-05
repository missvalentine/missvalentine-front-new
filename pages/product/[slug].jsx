import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSection from '../../components/Homepage/ProductSection'
import withBaseLayout from '../../components/Layout/BaseLayout'
import ProductDetail from '../../components/ProductList/ProductDetail'
import ProductView from '../../components/ProductList/ProductView'
import { projectName } from '../../constant/projectSetting'
import { addProductToRecent } from '../../redux/actions/productListActions'
import { callApi } from '../../utils/callApi'
import { shuffleArray } from '../../utils/helperFunction'

const ProductBySlug = (props) => {
  const { product } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProductToRecent(product));
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.slug]);

  const productListState = useSelector(
    (state) => state.productListState.allProducts,
  );
  const recentProductListState = useSelector(
    (state) => state.productListState.recentlyViewed,
  );


  return (
    <section className="">
      <Head>
        <title>{`${product.name.toUpperCase()} | ${projectName}`}</title>
      </Head>
      <ProductView product={product} />
      <ProductDetail product={product} />
     {productListState.length >= 3 && <ProductSection
        productList={shuffleArray(productListState)}
        containerClassName="ftco-section-extra"
        heading="Products"
        subHeading="You May Like"
      />}
      {productListState.length >= 3 &&<ProductSection
        productList={recentProductListState}
        containerClassName="ftco-section-extra bg-light"
        heading="Products"
        subHeading="Recently Viewed"
      />}
    </section>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug // Get ID from slug `/book/1`

  const response = await callApi({
    url: `/product/slug?slug=${slug}`,
  })

  console.log('slug product', slug)

  return {
    props: { product: response?.data?.success ? response?.data?.data : null },
  }
}

export default withBaseLayout(ProductBySlug)
