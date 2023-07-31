import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Tooltip } from 'realayers'
import { removeItemToCart } from '../../redux/actions/cartActions'
import { getColorCode, imageLoader } from '../../utils/helperFunction'
import styles from './Cart.module.scss'

const CartItemCard = (props) => {
  const { productId, imgSrc, name, price, size, color, quantity } = props
  const dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    dispatch(removeItemToCart({ productId, size, color }))
    toast.success('Item removed from cart successfully!')
  }

  return (
    <div className=" card mb-2 p-2  ">
      <div className="row flex-direction-row ">
        <div className="col-md-3">
          {imgSrc && (
            <Image
              width="100px"
              height="130px"
              src={imgSrc}
              className={styles.borderCream}
              alt="bra-product"
              loader={imageLoader}
              // placeholder="blur"
              // blurDataURL={product.images[0].data}
            />
          )}
        </div>
        <div className="col-md-9">
          <div className={styles.itemName}>
            <strong>{name}</strong>
          </div>
          <div>It is a must-have in your lingerie wardrobe</div>
          <div className="d-flex my-2 ">
            <Tooltip content={`Quantity: ${quantity}`}>
              <div className={`${styles.select}`}>
                <label for="quantity">Qty:</label>
                <select name="quantity" id="quantity" value={quantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </Tooltip>
            <Tooltip content={`Size: ${size}`}>
              <div className={`mx-3 ${styles.select}`}>{size}</div>
            </Tooltip>

            {color && (
              <Tooltip content={`Color: ${color}`}>
                <div className={styles.colorBar}>
                  <div style={{ backgroundColor: getColorCode(color) }} />
                </div>
              </Tooltip>
            )}
          </div>
          <div>&#8377;&nbsp;{price}</div>
        </div>
      </div>

      <Tooltip
        triggerClassName={styles.closeBtn}
        content={`Remove product from cart!`}
      >
        <div onClick={handleRemoveFromCart}>
          <span
            className="text-secondary icon-close2 pointer"
            // onClick={closeModal}
          ></span>
        </div>
      </Tooltip>
    </div>
  )
}

export default CartItemCard
