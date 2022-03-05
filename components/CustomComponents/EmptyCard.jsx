import Link from 'next/link'
import React from 'react'

const EmptyCard=({title,subtitle})=> {
  return (
      <div className="container">
        <div className="row no-gutters align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated fadeInUp text-center">
            <h1 className="icon-shopping-cart text-dark"></h1>
            <h3>{title}</h3>
            <div className="my-2 text-secondary">{subtitle}</div>
              <Link href="/shop/all">
                <a className='px-3 py-1 btn btn-primary'>Explore</a>
              </Link>
          </div>
        </div>
      </div>
  )
}
export default EmptyCard; 
