import React, { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('../components/Homepage/HeroSection'))
const TrendingSection = dynamic(() =>
  import('../components/Homepage/TrendingSection'),
)
const InfoSection = dynamic(() => import('../components/Homepage/InfoSection'))
const ProductSection = dynamic(() =>
  import('../components/Homepage/ProductSection'),
)
const Banner = dynamic(() => import('../components/Homepage/Banner'))
const TestimonySection = dynamic(() =>
  import('../components/Homepage/TestimonySection'),
)
const PolicySection = dynamic(() =>
  import('../components/Homepage/PolicySection'),
)

import withBaseLayout from '../components/Layout/BaseLayout'
import { projectName } from '../constant/projectSetting'
import { callApi } from '../utils/callApi'
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts } from '../redux/actions/productListActions'
import { setAllCategories } from '../redux/actions/categoryActions'

const Home = (props) => {
  const dispatch = useDispatch();
  const { productListData, categoryData } = props;
  
  useEffect(() => {
    dispatch(setAllProducts(productListData));
    dispatch(setAllCategories(categoryData));

  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{`Home | ${projectName}`}</title>
      </Head>
      <HeroSection />
      <TrendingSection />
      <InfoSection />
      <ProductSection />
      <Banner />
      <TestimonySection />
      <PolicySection />
    </React.Fragment>
  )
}


export async function getStaticProps() {
  const response = await callApi({
    url: `/product/all?limit=12`,
  });
  const categoryResponse = await callApi({
    url: `/category/all`,
  });

  return {
    props: {
      productListData: response?.data?.success ? response?.data?.data : [],
      categoryData: categoryResponse?.data?.success ? categoryResponse?.data?.data : [],
    },
  }
}

const HOCprops = {
  displayName: 'Home',
  fixedNavbar: false,
}

export default withBaseLayout(Home, HOCprops)
