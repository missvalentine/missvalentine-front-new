import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ProductSection from '../../components/Homepage/ProductSection';
import withBaseLayout from '../../components/Layout/BaseLayout';
import ProductDetail from '../../components/ProductList/ProductDetail';
import ProductView from '../../components/ProductList/ProductView';
import { projectName } from '../../constant/projectSetting';
import { callApi } from '../../utils/callApi';

const ProductBySlug =(props)=> {
	const {product} = props;
	console.log("ProductBySlug ",product);

  return (
		<section className="">
			<Head>
				<title>{`${product.name.toUpperCase()} | ${projectName}`}</title>
			</Head>
    	<ProductView product={product} />
    	<ProductDetail product={product} />
		<ProductSection containerClassName="ftco-section-extra" heading="Products" subHeading="You May Like" />
		<ProductSection  containerClassName="ftco-section-extra bg-light" heading="Products" subHeading="Recently Viewed" />
    </section>
  )
}
// getServerSideProps
// getStaticProps
  
export async function getServerSideProps(context) {
	const slug = context.params.slug // Get ID from slug `/book/1`
	// return {	props: {slug}};
	console.log("slug product",slug);

	const response = await callApi({
	  url: `/product/slug?slug=${slug}`,
	})

	console.log("slug product",slug);

	return { props: { product : response?.data?.success ? response?.data?.data : null }};	
}
  
export default withBaseLayout(ProductBySlug); 
