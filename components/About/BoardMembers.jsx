import React from 'react'
import style from '/styles/components/About.module.scss'
const BoardMembers = () => {
  const directors = [
    {
      name: 'Mr. Vikas Babu Jain',
      desc: 'M.D, MissValentine',
      //   img: VikasImage,
    },
    {
      name: 'Mr. Pawan Kumar Jain',
      desc: 'Director, MissValentine',
      //   img: PawanImage,
    },
  ]

  return (
    <section id="board-member" className="ftco-section bg-light ftco-product">
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animated fadeInUp">
            <h1 className="big">Directors</h1>
            <h2 className="mb-4">Board of Directors</h2>
          </div>
        </div>
        <div className="c-directors" id="about-us">
          <div className="text-center m-auto w-75 pb-5">
            Our Team has deep expertise in the textile industries, having more
            than 14 years of experience in manufacturing & marketing, and a
            passion for fundamentally improving & producing quality products
          </div>
          <div className={style.cards}>
            {directors.map((d, i) => (
              <div key={i} className={style.card}>
                {/* <img
                  alt={'director ' + d.name}
                  className="c-directors__cards-card-img"
                  src={d.img}
                /> */}
                <div className={style["card-name"]}>{d.name}</div>
                <div className={style.cardDesc}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default BoardMembers
