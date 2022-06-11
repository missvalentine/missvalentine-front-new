import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  isCartAvailable,
  comapanyAlternateNo,
} from '../../constant/projectSetting'
import { addItemToCart } from '../../redux/actions/cartActions'
import styles from '../../styles/components/ProductView.module.scss'
import { getColorCode, imageLoader } from '../../utils/helperFunction'
import Modal from '../CustomComponents/Modal'

const modalStyles = {
  content: {
    top: '5%',
    left: '30%',
    right: 'auto',
    bottom: '5%',
    width: '480px',
    height: 'auto',
    marginRight: '-50%',
    zIndex: 22,
    padding: 0,
    // transform: 'translate(-50%, -50%)',
  },
}

const ProductView = (props) => {
  const { product } = props
  const userId = useSelector((state) => state.authState.user._id)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [isImageZoom, setIsImageZoom] = useState(false)

  const handleAddToCart = () => {
    dispatch(addItemToCart(product, quantity, userId))
    toast.success('Item Added to Cart Successfully!')
  }
  const handleDecreaseQuantity = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1))
  }
  const handleIncreaseQuantity = () => {
    setQuantity((q) => q + 1)
  }
  return (
    <section className="ftco-section-extra bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 ftco-animated fadeInUp">
            <div className="image-popup" onClick={() => setIsImageZoom(true)}>
              <Image
                height="800px"
                width="600px"
                src={product.images[0].data}
                className="img-fluid"
                alt={product.name}
                loader={imageLoader}
                // placeholder="blur"
                // blurDataURL={product.images[0].data}
              />
            </div>
            <span className={styles['status-tag']}>Trending</span>
          </div>
          <div className="col-lg-6 product-details pl-md-5 ftco-animated fadeInUp">
            <h4 className="text-uppercase text-secondary">
              {product?.category.name}
            </h4>
            <h3>{product.name}</h3>
            {product.price && (
              <p className="price">
                <span>&#8377;{150 || product.price}</span>
              </p>
            )}

            {product.sizes.length && (
              <div className="mb-2">
                <h6 className="text-dark">Available Sizes</h6>
                {product.sizes.map((s, i) => (
                  <div key={i} className={styles.sizeBox}>
                    {s}
                  </div>
                ))}
                <br />
              </div>
            )}
            {product.colors.length ? (
              <div className="mb-2">
                <h6 className="text-dark">Colors</h6>
                {product.colors.map((c, i) => (
                  <div className={styles.colorBox} key={i}>
                    <div style={{ backgroundColor: getColorCode(c) }} />
                  </div>
                ))}
              </div>
            ) : null}
            <h6 className="text-dark">Product Features</h6>
            <div>{product.shortDesc}</div>
            <div>100% Original Product</div>

            <div className="row mt-4">
              {/* <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="input-group col-md-6 d-flex mb-3">
                <span className="input-group-btn mr-2">
                  <button
                    type="button"
                    className="quantity-left-minus btn"
                    data-type="minus"
                    data-field=""
                    onClick={handleDecreaseQuantity}
                  >
                    <i className="ion-ios-remove"></i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-control input-number"
                  value={quantity}
                  min="1"
                  max="100"
                />
                <span className="input-group-btn ml-2">
                  <button
                    type="button"
                    className="quantity-right-plus btn"
                    data-type="plus"
                    data-field=""
                    onClick={handleIncreaseQuantity}
                  >
                    <i className="ion-ios-add"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className="row mt-3 justify-content-sm-left justify-content-center">
              <a
                className="col-sm-5 col-11 btn btn-dark py-3 px-5 mr-sm-3"
                target="_black"
                href={`https://wa.me/+91${comapanyAlternateNo}/?text=Hello!%20I%20want%20to%20enquire%20about%20${quantity}%20pieces%20 ${
                  product.name && product.name !== ''
                    ? product.name
                    : product.category.name
                }`}
              >
                Whatsapp Enquiry
              </a>
              {isCartAvailable && (
                <div
                  onClick={handleAddToCart}
                  className="col-5  btn btn-primary py-3 px-5"
                >
                  Add to Cart
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isImageZoom}
        closeModal={() => setIsImageZoom(false)}
        modalStyles={modalStyles}
      >
        <Image
          height="800px"
          width="600px"
          src={product.images[0].data}
          className="img-fluid"
          alt={product.images[0].data}
          loader={imageLoader}
          // placeholder="blur"
          // blurDataURL={product.images[0].data}
        />
      </Modal>
    </section>
  )
}

export default ProductView

// target="_black"
//                     // href={`https://wa.me/9999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${data.name}`}
//                     href={`https://wa.me/+919999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${
//                       data.name && data.name !== ''
//                         ? data.name
//                         : data.category.name
//                     }`}
