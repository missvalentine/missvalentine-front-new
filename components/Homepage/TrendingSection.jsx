import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import Slide from 'react-reveal/Slide'

import 'react-multi-carousel/lib/styles.css'
import ProductCard from '../ProductCard'
import DisplayCard from '../CustomComponents/DisplayCard'
import { useSelector } from 'react-redux'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const TrendingSection = () => {
  const allProducts = useSelector((state) => state.productListState.allProducts)
  return (
    <DisplayCard id="trending" heading="Trending" subHeading="Trending">
      <Carousel
        swipeable
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all 1 ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px px-4"
      >
        {allProducts?.map((product, index) => (
          <Slide key={product.name} className="p-2" bottom>
            <ProductCard product={product} hideAddToCart />
          </Slide>
        ))}
      </Carousel>
    </DisplayCard>
  )
}

export default TrendingSection
