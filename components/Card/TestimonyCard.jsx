import React from 'react'

export default function TestimonyCard() {
  return (
    <div className="testimony-wrap py-4 pb-5">
        <div className="user-img mb-4" style={{ backgroundImage: `url(${"https://wallpapercave.com/wp/wp5734563.jpg"})`}}>
            <span className="quote d-flex align-items-center justify-content-center">
                <i className="icon-quote-left"></i>
            </span>
        </div>
        <div className="text text-center">
            <p className="mb-4">A small river named Duden flows by their place and supplies
                it with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.</p>
            <p className="name">Roger Scott</p>
            <span className="position">Customer</span>
        </div>
    </div>
    )
}
