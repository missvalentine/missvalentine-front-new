import React from 'react'
import {
    comapanyCustomerCareNo,
    comapanyOfficeLocation,
    comapanyUrl,
    companyInfoEmail,
  } from '../../constant/projectSetting'
  
const ContactInfo=()=> {
  return (
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
  )
}
export default ContactInfo;