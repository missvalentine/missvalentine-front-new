import Image from 'next/image'
import React from 'react'
import { getColorCode, imageLoader } from '../../utils/helperFunction'
import styles from './Cart.module.scss'
import productStyles from '../ProductList/ProductView.module.scss'

const CartItemMetaData = (props) => {
  const {
    imgSrc,
    name,
    price,
    size,
    color,
    handleDone,
    setColor,
    setSize,
    colors,
    sizes,
  } = props
  return (
    <div className=" mb-2 py-3 px-4 ">
      <div className="row flex-direction-row ">
        <div className="col-md-2">
          <Image
            width="60px"
            height="80px"
            src={imgSrc}
            className={styles.borderSecondary}
            alt="bra-product"
            loader={imageLoader}
            // placeholder="blur"
            // blurDataURL={product.images[0].data}
          />
        </div>
        <div className="col-md-9">
          <h4 className={styles.itemName}>
            <strong>{name}</strong>
          </h4>
          {/* <div>{'MissValentine' || categoryName}</div> */}
          <div className="text-secondary">&#8377;&nbsp;{'1889' || price}</div>
        </div>
      </div>
      <hr className="px-3" />
      <div>
        {colors.length ? (
          <div className="mb-3">
            <h6>Select Color</h6>
            {colors.map((c, i) => (
              <div
                className={`${productStyles.colorBox} ${
                  c === color ? productStyles.colorBoxSelected : ''
                }`}
                onClick={() => setColor(c)}
                key={i}
              >
                <div style={{ backgroundColor: getColorCode(c) }} />
              </div>
            ))}
          </div>
        ) : null}
        {sizes.length && (
          <div className="mb-3">
            <h6>Select Size</h6>
            {sizes.map((s, i) => (
              <div
                key={i}
                className={`${productStyles.sizeBox} ${
                  s === size ? productStyles.sizeBoxSelected : ''
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </div>
            ))}
            <br />
          </div>
        )}
      </div>
      <button onClick={handleDone} className="btn btn-primary-2 w-100 mt-2">
        Done
      </button>
    </div>
  )
}

export default CartItemMetaData
