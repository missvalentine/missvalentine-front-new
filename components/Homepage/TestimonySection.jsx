import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Slide } from 'react-reveal'
import TestimonyCard from '../Card/TestimonyCard'
import DisplayCard from '../CustomComponents/DisplayCard'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const TestimonySection = () => {
  return (
    <DisplayCard id="testimony" heading="Testimony" subHeading="">
        <div className="row justify-content-center">
          <Slide right>
            <div className="col-md-8 ftco-animated fadeInLeft">
              <Slide bottom>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  // infinite={true}
                  //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={150000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  //   deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <TestimonyCard />
                  <TestimonyCard />
                  <TestimonyCard />
                  <TestimonyCard />
                </Carousel>
              </Slide>
            </div>
          </Slide>
        </div>
    </DisplayCard>
  )
}
export default TestimonySection
