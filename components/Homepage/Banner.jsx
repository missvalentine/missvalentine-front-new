import React from 'react'
import Slide from 'react-reveal/Slide'

const Banner = () => {
  return (
    <section
      className="ftco-section ftco-section-more img"
      style={{
        height: '100vh',
        backgroundImage: `url(${'https://wallpapercave.com/wp/wp5734563.jpg'})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section">
            <Slide bottom>
              <h2>Summer Sale</h2>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
