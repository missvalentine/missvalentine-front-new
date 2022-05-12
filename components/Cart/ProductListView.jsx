import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Slide } from 'react-reveal'
import { toast } from 'react-toastify'
import { removeItemToCart } from '../../redux/actions/cartActions'

const ProductListView = (props) => {
  const { products } = props
  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemToCart(productId))
    toast.success('Item removed to Cart Successfully!')
  }

  return (
    <div className="row">
      <div className="col-md-12 ftco-animated fadeInUp">
        <div className="cart-list">
          <table className="table">
            <thead className="thead-primary">
              <tr className="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <Slide left key={product.name}>
                  <tr
                    key={`cart-${product.name} ${index}`}
                    className="text-center"
                  >
                    <td className="image-prod">
                      <Image
                        width="110px"
                        height="130px"
                        src={product.images[0].data}
                        className="img"
                        alt="bra-product"
                        placeholder="blur"
                        blurDataURL={product.images[0].data}
                      />
                      <div
                        style={{
                          backgroundImage: `url(${'https://wallpapercave.com/wp/wp5734563.jpg'})`,
                        }}
                      ></div>
                    </td>

                    <td className="product-name">
                      <h3>{product.name}</h3>
                      <p>It is a must-have in your lingerie wardrobe</p>
                    </td>

                    <td className="price">&#8377;{product.price}</td>

                    <td className="quantity">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="quantity"
                          className="quantity form-control input-number"
                          value="1"
                          min="1"
                          max="100"
                        />
                      </div>
                    </td>

                    <td className="total">&#8377;{product.price}</td>
                    <td className="product-remove">
                      <button
                        className=""
                        onClick={() => handleRemoveFromCart(product._id)}
                      >
                        <span className="ion-ios-close"></span>
                      </button>
                    </td>
                  </tr>
                </Slide>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default ProductListView
