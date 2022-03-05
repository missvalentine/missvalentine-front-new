import React from 'react'
import {
  comapanyCustomerCareNo,
  comapanyOfficeLocation,
  comapanyUrl,
  companyInfoEmail,
} from '../../constant/projectSetting'

const EnquiryForm =()=> {
  return (
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-white p-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row d-flex mt-5 contact-info">
          <div className="w-100"></div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-3">
              <div>
                <span className="icon icon-map-marker" />
                &nbsp;
                <span>Office Address</span>
              </div>
              <div className="ow-anywhere text-dark">
                <a className=" text-dark" href="mailto:info@yoursite.com">
                  {comapanyOfficeLocation}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-3">
              <div>
                <span className="icon icon-phone" />
                &nbsp;
                <span>Phone</span>
              </div>
              <div className="ow-anywhere text-dark">
                <a
                  className=" text-dark"
                  href={`tel:+91${comapanyCustomerCareNo}`}
                >{`tel:+91${comapanyCustomerCareNo}`}</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-3">
              <div>
                <span className="icon icon-envelope" />
                &nbsp;
                <span>Email</span>
              </div>
              <div className="ow-anywhere text-dark">
                <a className=" text-dark" href="mailto:info@yoursite.com">
                  {companyInfoEmail}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-3">
              <div>
                <span className="icon icon-globe" />
                &nbsp;
                <span>Website</span>
              </div>
              <div className="ow-anywhere text-dark">
                <a className=" text-dark" href={comapanyUrl}>
                  {comapanyUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnquiryForm;