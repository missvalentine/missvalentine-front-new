import React from 'react'
import { Slide } from 'react-reveal'
import { projectName } from '../../constant/projectSetting'
import DisplayCard from '../CustomComponents/DisplayCard'

export default function PolicySection() {
  return (
    <DisplayCard
      id="trending"
      heading="Services"
      subHeading="We want you to express yourself"
      bgColor="light"
      addClassName="ftco-services"
    >
      <div className="row">
        <div className="col-md-4 text-center d-flex align-self-stretch ">
          <Slide bottom>
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-003-medal"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Superior Quality</h3>
                <p>
                  The fabric used in our products are given the upmost priority.{' '}
                  {projectName} range is pleasant to touch, and not rough or
                  hard.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div className="col-md-4 text-center d-flex align-self-stretch ">
          <Slide bottom>
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-001-box"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Premium Packaging</h3>
                <p>
                  It's out norm to deliver the best in class product. Commitment
                  to qaulity is our key moto.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div className="col-md-4 text-center d-flex align-self-stretch ">
          <Slide bottom>
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-002-recommended"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Customer Satisfaction</h3>
                <p>
                  We think our job is to take responsibility for the complete
                  user experience. And if it’s not up to par, it’s our fault,
                  plain and simple.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </DisplayCard>
  )
}
