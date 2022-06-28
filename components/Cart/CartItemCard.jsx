import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { removeItemToCart } from '../../redux/actions/cartActions'
import { imageLoader } from '../../utils/helperFunction'
import styles from './Cart.module.scss'

const CartItemCard = (props) => {
  const { productId, imgSrc, name, price } = props
  const dispatch = useDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeItemToCart(productId))
    toast.success('Item removed to Cart Successfully!')
  }

  return (
    <div className=" card mb-2 p-2  ">
      <div className="row flex-direction-row ">
        <div className="col-md-3">
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
        </div>
        <div className="col-md-9">
          <div className={styles.itemName}>
            <strong>{name}</strong>
          </div>
          <div>It is a must-have in your lingerie wardrobe</div>
          <div>
            <div className={`my-2 ${styles.select}`}>
              <label for="quantity">Qty:</label>
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div>&#8377;{price}</div>
        </div>
      </div>

      <div className={styles.closeBtn} onClick={handleRemoveFromCart}>
        <span
          className="text-secondary icon-close pointer"
          // onClick={closeModal}
        ></span>
      </div>
    </div>
  )
}

export default CartItemCard
