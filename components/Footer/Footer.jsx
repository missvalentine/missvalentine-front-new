import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-reveal'
import { comapanyCustomerCareNo, comapanyOfficeLocation, companyInfoEmail, projectName, socialLinks } from '../../constant/projectSetting'

const Footer=()=> {
  return (
    <footer className="ftco-footer bg-light ftco-section">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">{projectName}</h2>
              <Slide bottom cascade> 

              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                {socialLinks.map((socialLink) => (
                  <li key={socialLink.name}>
                      <a target="_blank" rel="noreferrer"  href={socialLink.link}>
                        <span className={socialLink.iconClass}></span>
                      </a>
                  </li>
                ))}

              </ul>
              </Slide>

            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/shop/all">
                    <a className="py-2 d-block">Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry-form">
                    <a className="py-2 d-block">Enquiry Form</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="py-2 d-block">About</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/">
                    <a className="py-2 d-block">Journal</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact">
                    <a className="py-2 d-block">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Help</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                  <li>
                    <Link href="/accessibility">
                      <a className="py-2 d-block">Website Accessibility</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/">
                      <a className="py-2 d-block">Returns &amp; Exchange</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/privacy-policy">
                      <a className="py-2 d-block">Terms &amp; Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a className="py-2 d-block">Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
                {/* <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a className="py-2 d-block">FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="py-2 d-block">Contact</a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      {comapanyOfficeLocation}
                    </span>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <span className="icon icon-phone"></span>
                        <span className="text">+91 {comapanyCustomerCareNo}</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <span className="icon icon-envelope"></span>
                        <span className="text ow-anywhere"> {companyInfoEmail}</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | {projectName}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default  Footer;