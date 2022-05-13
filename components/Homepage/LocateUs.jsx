import React from 'react'
import { Slide } from 'react-reveal'
import { useRouter } from 'next/router'

import {
  comapanyAlternateNo,
  comapanyCustomerCareNo,
  projectName,
} from '../../constant/projectSetting'
import DisplayCard from '../CustomComponents/DisplayCard'

const LocateUs = () => {
  const router = useRouter()
  const handleViewContact = () => {
    router.push(`/contact`)
  }
  return (
    <DisplayCard
      id="trending"
      heading="Locate Us"
      subHeading="Get in touch"
      bgColor="light"
      addClassName="ftco-services pb-6"
    >
      <div className="row justify-content-center">
        <div className="col-md-4 text-center d-flex align-self-stretch ">
          <Slide bottom>
            <div className="media block-3 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="icon-phone medium"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Enquire Now</h3>
                <p>
                  Interested in our product line. Want to enquire about our
                  range of products, call us on.
                </p>
                <a href={`tel:+91${comapanyAlternateNo}`}>
                  <h4 className="heading">+91 {comapanyAlternateNo}</h4>
                </a>
              </div>
            </div>
          </Slide>
        </div>
        <div className="col-md-4 text-center d-flex align-self-stretch ">
          <Slide bottom>
            <div className="media block-3 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="icon-chat medium"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Customer Support</h3>
                <p>
                  Got a question? give us a call, our customer support members
                  will be happy to help.
                </p>
                <a href={`tel:+91${comapanyCustomerCareNo}`}>
                  <h4 className="heading">+91 {comapanyCustomerCareNo}</h4>
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleViewContact}
          className="btn btn-lg px-4 btn-outline-secondary"
        >
          View Address
        </button>
      </div>
    </DisplayCard>
  )
}

export default LocateUs
