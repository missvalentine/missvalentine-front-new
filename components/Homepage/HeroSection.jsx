import React from 'react'
import {
  companyTagline,
  companyTagline2,
  companyTagline3,
  projectName,
} from '../../constant/projectSetting'
import Slide from 'react-reveal/Slide'

const HeroSection = () => {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{
          height: '100vh',
          backgroundImage: `url(${'https://wallpapercave.com/wp/wp5734563.jpg'})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="h-100 row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <h3 className="v">
              {projectName} - {companyTagline2}
            </h3>
            <h3 className="vr">{companyTagline3}</h3>
            <Slide bottom>
              <div className="col-md-11 text-center">
                <h1>Le Stylist</h1>
                <h2>
                  <span>{companyTagline}</span>
                </h2>
              </div>
            </Slide>
            <div className="mouse">
              <a href="#trending" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-down"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="goto-here"></div>
    </>
  )
}

export default HeroSection
