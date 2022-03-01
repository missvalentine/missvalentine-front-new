import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-reveal'

const DisplayCard = (props) => {
  const {
    id="",
    heading = 'heading',
    subHeading = 'subHeading',
    children,
    bgColor = 'white',
    addClassName=""
  } = props

  return (
    <section id={id} className={`ftco-section ftco-product bg-${bgColor} ${addClassName}`}>
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            <Slide bottom>
              <h2 className="mb-4">{subHeading}</h2>
              <h1 className="big">{heading}</h1>
            </Slide>
          </div>
        </div>
        <div className="w-100">
            {children}
            </div>
      </div>
    </section>
  )
}
export default DisplayCard
