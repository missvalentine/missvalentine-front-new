import React from 'react'
import {
  InfoAboutCompany1,
  InfoAboutCompany2,
  projectName,
} from '../../constant/projectSetting'
import Slide from 'react-reveal/Slide'

const InfoSection = () => {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">
          <div
            className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            style={{
              height: '100vh',
              backgroundImage: `url(${'https://wallpapercave.com/wp/wp5734563.jpg'})`,
            }}
          >
            <a
              href="https://vimeo.com/45830194"
              className="icon popup-vimeo d-flex justify-content-center align-items-center"
            >
              <span className="icon-play"></span>
            </a>
          </div>
          <Slide bottom >
            <div className="col-md-7 py-5 wrap-about pb-md-5">
              <div className="heading-section-bold mb-5 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">{projectName}</h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p className="info">{InfoAboutCompany1}</p>
                <p className="info">{InfoAboutCompany2}</p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}
export default InfoSection;
