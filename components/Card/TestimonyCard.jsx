import Image from 'next/image'
import React from 'react'
// public/images/avatars/avata-female-1.png
export default function TestimonyCard(props) {
  const { imageSrc, author, comment, position } = props
  return (
    <div className="testimony-wrap py-4 pb-5 text-center">
      <div className="user-img mb-4">
        <Image
          src={imageSrc}
          className="user-img"
          alt="missvalentine bra model"
          width="100px"
          height="100px"
          placeholder="blur"
          blurDataURL="/images/loader/women-fashion-loader.gif"
        />
        <span className="quote d-flex align-items-center justify-content-center">
          <i className="icon-quote-left"></i>
        </span>
      </div>
      <div className="text text-center">
        <p className="mb-4">{comment}</p>
        <p className="name">{author}</p>
        <span className="position">{position}</span>
      </div>
    </div>
  )
}
