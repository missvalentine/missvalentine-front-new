import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { callApi } from '../../utils/callApi'
import ProductList from '../../components/Shop/ProductList'
import { addCategoryData } from '../../redux/actions/categoryActions'
import { EmailReg } from '../../utils/regEx'

const EQform = () => {
  const dispatch = useDispatch()

  const allCategories = useSelector((state) => state.categoryState.categories)
  const allCategoriesData = useSelector(
    (state) => state.categoryState.categoriesData,
  )
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [storeName, setStoreName] = useState('')
  const [storeAddress, setStoreAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [categorySlug, setCategorySlug] = useState('missvalentine-bra-set')
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleCategoryChange = async (e) => {
    try {
      const response = await callApi({
        url: `/category/slug?slug=${e.target.value}`,
      })
      setCategorySlug(e.target.value)

      console.log('log call', e.target.value, response?.data?.data?.products)
      dispatch(
        addCategoryData(response?.data?.success ? response?.data?.data : []),
      )
    } catch (error) {
      console.log('Error in EQ Form | handleCategoryChange | ', error)
    }
  }

  const handleSelectProductClick = (_productId) => {
    let tempSelectedProducts = [...selectedProducts]
    console.log('_productId', _productId)
    console.log('tempSelectedProducts', tempSelectedProducts)
    const isExist = tempSelectedProducts.indexOf(_productId)
    console.log(isExist)
    if (isExist > -1) {
      tempSelectedProducts.splice(isExist, 1)
    } else tempSelectedProducts.unshift(_productId)
    setSelectedProducts(tempSelectedProducts)
  }

  const handleSendEnquiry = async () => {
    try {
      console.log('handleSendEnquiry')
      if (!email || !EmailReg.test(email)) {
        toast.error('Please enter a valid email!')
        return
      }
      const dataToSend = {
        name: name,
        storeName: storeName,
        phone: phone,
        address: storeAddress,
        city: city,
        state: state,
        products: selectedProducts,
        callScreen: 'enquiry',
      }

      const response = await toast.promise(
        () =>
          callApi({
            method: 'post',
            url: '/contact',
            data: dataToSend,
          }),
        {
          pending: 'Submitting your enquiry',
          success: 'Enquiry Received👌',
          error: "Could'nt submit your enquiry right now! 🤯",
        },
      )
      if (response) {
        setName('')
        setEmail('')
        setPhone('')
        setStoreName('')
        setStoreAddress('')
        setCity('')
        setState('')
      }
    } catch (error) {
      console.log('error', error)
      toast.error("Could'nt submit your enquiry right now! 🤯")
    }
  }

  return (
    <section className="ftco-section-2 contact-section bg-light">
      <div className="container bg-white p-5 contact-form block-9">
        <div className="row ">
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Your Store Name"
              name="storeName"
              value={storeName}
              onChange={({ target }) => setStoreName(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Store Address"
              name="storeAddress"
              value={storeAddress}
              onChange={({ target }) => setStoreAddress(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name="state"
              value={state}
              onChange={({ target }) => setState(target.value)}
            />
          </div>
        </div>
        <div className="form-group text-center">
          <button
            onClick={handleSendEnquiry}
            className="btn btn-primary-2 py-3 px-5"
          >
            Send Enquiry
          </button>
        </div>
        <hr />

        <h6 className="py-2">
          You can also select products for enquiry (optional)
        </h6>
        <div className="row ">
          <div className="form-group col-md-4 ">
            <div className="select-wrap">
              {/* <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div> */}

              <select
                name=""
                id=""
                className="form-control"
                onChange={handleCategoryChange}
                // value={categorySlug}
              >
                {allCategories
                  .filter((_category) => _category.products.length >= 1)
                  .map((_category) => (
                    <option key={_category.name} value={_category.slug}>
                      {_category.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {categorySlug && (
            <ProductList
              mode="enquiry"
              products={allCategoriesData[categorySlug]?.products || []}
              cardCallback={handleSelectProductClick}
              selectedProducts={selectedProducts}
            />
          )}
        </div>

        <div className="form-group text-center">
          <button
            onClick={handleSendEnquiry}
            className="btn btn-primary-2 py-3 px-5"
          >
            Send Enquiry with products
          </button>
        </div>
      </div>
    </section>
  )
}

export default EQform
