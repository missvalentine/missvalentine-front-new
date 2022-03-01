import Image from 'next/image';
import React from 'react';
import ProductSection from '../../components/Homepage/ProductSection';
import withBaseLayout from '../../components/Layout/BaseLayout';
import ProductList from '../../components/ProductList/ProductList';

const ProductBySlug =()=> {
  return (
		<section className="">
    	<ProductList/>
		<ProductSection/>
		<ProductSection/>
    </section>

  )
}

export default withBaseLayout(ProductBySlug); 
