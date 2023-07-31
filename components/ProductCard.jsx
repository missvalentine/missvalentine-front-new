import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { isCartAvailable, isReviewsAvailable } from '../constant/projectSetting'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/actions/cartActions'
import { toast } from 'react-toastify'
import styles from './ProductCard.module.scss'
import { imageLoader } from '../utils/helperFunction'
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../redux/actions/wishlistActions'
import { Tooltip, useDialog, useDrawer } from 'realayers'
import CartItemMetaData from './Cart/CartItemMetaData'

const ProductCard = (props) => {
  const {
    product,
    mode = 'cart',
    callback,
    isAdded = false,
    isDisabled = false,
    isWishlistOption = true,
    isAddToCartOption = true,
  } = props
  const { Dialog, setOpen: setDialogOpen } = useDialog()
  const { Drawer, setOpen: setDrawerOpen } = useDrawer()

  const wishlistState = useSelector((state) => state.authState.user.wishlist)
  const dispatch = useDispatch()
  const router = useRouter()

  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  const handleProductClick = () => {
    if (!isDisabled) router.push(`/product/${product.slug}`)
  }
  const handleAddToCartClick = () => {
    if (callback) {
      callback(product._id)
    } else {
      // setDialogOpen(true)
      setDialogOpen(true)
    }
  }

  const handleAddtoCartSubmit = () => {
    if (!color) {
      toast.info('Please Select Color First!')
    } else if (!size) {
      toast.info('Please Select Size First!')
    } else {
      dispatch(
        addItemToCart({
          productId: product._id,
          quantity: 1,
          color,
          size,
        }),
      )
      setDialogOpen(false)
      toast.success('Item Added to Cart Successfully!')
    }
  }

  const handleAddToWishlist = (event) => {
    event.target.classList.toggle('heart-liked')
    dispatch(addItemToWishlist(product._id))
    toast.success('Item Wishlisted!')
  }

  const handleRemoveProductWishlist = (event) => {
    console.log('handleRemoveProductWishlist', event.target)
    event.target.classList.toggle('heart-liked')
    dispatch(removeItemFromWishlist(product._id))
    toast.success('Item removed from wishlist!')
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
  const isWishlisted =
    wishlistState?.findIndex((wid) => wid == product._id) >= 0
  return (
    <div
      className={`${styles.productCard} product ${
        mode == 'enquiry' && 'px-md-4'
      }`}
    >
      {mode === 'wishlist' && (
        <div onClick={handleRemoveProduct} className={styles.closeBtn}>
          <span className="icon-close2"></span>
        </div>
      )}
      <div className={!isDisabled && 'pointer'} onClick={handleProductClick}>
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
          <h3 className={styles.productName}>{product.name}</h3>
          <div className="d-flex">
            <div className="pricing">
              {product.price ? (
                <div className="price">
                  <span className="mr-2 price-dc">&#8377;150.00</span>
                  <span className="price-sale">&#8377;105.00</span>
                </div>
              ) : (
                <div>{product.category.name}</div>
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
        {isCartAvailable && (isWishlistOption || isAddToCartOption) && (
          <div className="pb-2 px-3">
            <hr />
            <div className="bottom-area d-flex btn btn-cyan">
              {isAddToCartOption && (
                <div
                  className={styles.addToCartButton}
                  onClick={handleAddToCartClick}
                >
                  <span className="icon-cart-plus mr-2"></span>
                  {isAdded ? (
                    <span>Added </span>
                  ) : (
                    <span>Add to {mode == 'enquiry' ? 'list' : 'cart'} </span>
                  )}
                </div>
              )}

              {isWishlistOption && (
                <Tooltip
                  triggerClassName="ml-auto"
                  content={isWishlistOption ? 'Already in wishlist' : 'A  '}
                >
                  <div
                    onClick={
                      isWishlistOption
                        ? handleRemoveProductWishlist
                        : handleAddToWishlist
                    }
                    id={`product_heart_${product.slug}`}
                    className={`heart`}
                  ></div>
                </Tooltip>
              )}
            </div>
          </div>
        )}
      </div>

      <Dialog disablePadding>
        <CartItemMetaData
          imgSrc={product.images[0].data}
          name={product.name}
          price={product.price}
          colors={product.colors}
          sizes={product.sizes}
          size={size}
          color={color}
          setColor={setColor}
          setSize={setSize}
          handleDone={handleAddtoCartSubmit}
          categoryName={product?.category?.name}
        />
      </Dialog>
      <Drawer>
        <div>Helo darw</div>
        {/* <CartItemMetaData
          imgSrc={product.images[0].data}
          name={product.name}
          price={product.price}
          colors={product.colors}
          sizes={product.sizes}
          size={size}
          color={color}
          setColor={setColor}
          setSize={setSize}
          handleDone={handleAddtoCartSubmit}
          categoryName={product?.category?.name}
        /> */}
      </Drawer>
    </div>
  )
}

export default ProductCard
