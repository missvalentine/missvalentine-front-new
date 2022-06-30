import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { isCartAvailable, isReviewsAvailable } from '../constant/projectSetting'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/actions/cartActions'
import { toast } from 'react-toastify'
import styles from '../styles/components/ProductCard.module.scss'
import { imageLoader } from '../utils/helperFunction'

const ProductCard = (props) => {
  const {
    product,
    hideAddToCart,
    mode = 'cart',
    callback,
    isAdded = false,
    isDisabled = false,
  } = props
  const dispatch = useDispatch()
  const router = useRouter()
  const handleProductClick = () => {
    if (!isDisabled) router.push(`/product/${product.slug}`)
  }
  const handleAddToCart = () => {
    if (callback) {
      callback(product._id)
    } else {
      dispatch(addItemToCart(product, 1))
      toast.success('Item added to cart successfully!')
    }
  }

  const statusTag = [
    {
      randomTagName: 'Best Selling',
      style: 'status-tag-1',
      icon: 'icon-percent',
    },
    {
      randomTagName: 'Trending',
      style: 'status-tag',
      icon: 'icon-local_offer',
    },
  ]
  const tagId = product.name[0] < 'j' ? (0 ? product.name[0] < 's' : 1) : -1
  // const randomTagName = product.name[0] ? :

  return (
    <div className={`product ${mode == 'enquiry' && 'px-md-4'}`}>
      <div
        className={`img-prod ${!isDisabled && 'pointer'}`}
        onClick={handleProductClick}
      >
        <Image
          height="700px"
          width="500px"
          className="img-fluid"
          src={product.images[0].data}
          alt={`${product.name} image`}
          loader={imageLoader}
          quality={1}
          // placeholder="blur"
          // blurDataURL={product.images[0].data}
        />
        {/* <span className="status">30%</span> */}
        {tagId >= 0 && (
          <span className={styles[statusTag[tagId].style]}>
            <span className={statusTag[tagId].icon}></span>
            &nbsp; &nbsp;
            {statusTag[tagId].randomTagName}
          </span>
        )}
      </div>
      <div className="text">
        <div className="pt-2 px-3 pointer" onClick={handleProductClick}>
          <h3 className="text-capitalize">{product.name}</h3>
          <div className="d-flex">
            <div className="pricing">
              {product.price ? (
                <p className="price">
                  <span className="mr-2 price-dc">&#8377;150.00</span>
                  <span className="price-sale">&#8377;105.00</span>
                </p>
              ) : (
                <p>{product.category.name}</p>
              )}
            </div>
            {isReviewsAvailable && (
              <div className="rating">
                <p className="text-right">
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star-o"></span>
                </p>
              </div>
            )}
          </div>
        </div>
        {(mode === 'enquiry' || (!hideAddToCart && isCartAvailable)) && (
          <div className="pb-2 px-3">
            <hr />
            <div className="bottom-area d-flex btn btn-cyan">
              <div className="add-to-cart" onClick={handleAddToCart}>
                <span className="icon-cart-plus mr-2"></span>
                {isAdded ? (
                  <span>Added </span>
                ) : (
                  <span>Add to {mode == 'enquiry' ? 'list' : 'cart'} </span>
                )}
              </div>
              {mode !== 'enquiry' && (
                <a href="#" className="ml-auto">
                  <span className="icon-heart-o"></span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
