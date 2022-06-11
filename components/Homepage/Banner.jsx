import Image from 'next/image'
import React from 'react'
import Slide from 'react-reveal/Slide'

const Banner = () => {
  return (
    <section
      className="ftco-section ftco-section-more img"
      style={{
        height: '100vh',
      }}
    >
      <span
        style={{
          height: '100vh',
          width: 'auto',
        }}
      >
        <Image
          // layout="responsive"
          src={`/images/bg/bg_01.png`}
          alt="missvalentine bra model"
          layout="fill"
          objectFit="cover"
        />
      </span>

      {/* <Image
              layout="fill"
              // width="100vw"
              // height="100vh"
              src="/images/models/model4.jpeg"
              className=""
            /> */}
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section">
            <Slide bottom>
              <h2
              // style={{ textShadow: '-1px 2px 10px #eee' }}
              >
                Summer Sale
              </h2>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
