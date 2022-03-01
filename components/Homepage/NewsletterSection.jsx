import React from 'react'
import { Slide } from 'react-reveal'
import DisplayCard from '../CustomComponents/DisplayCard'

const NewsletterSection = () => {
  return (
    <DisplayCard
      id="trending"
      heading="Subscribe"
      subHeading="SUBCRIBE TO OUR NEWSLETTER"
      bgColor="white"
    >
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-4">
          <form action="#" className="subscribe-form">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" className="submit px-3" />
            </div>
          </form>
        </div>
      </div>
    </DisplayCard>
  )
}

export default NewsletterSection
