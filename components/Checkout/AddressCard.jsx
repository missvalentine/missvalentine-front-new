import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Checkout.module.scss'

const AddressCard = (props) => {
  const {
    addressId = '',
    streetAddress = '',
    city = '',
    state = '',
    pincode = '',
    label = '',
    name = '',
    phone = '',
    country = '',
    handleEditAddress,
    handleRemoveAddress,
    isSelected = false,
    setSelectedAddressId,
  } = props

  return (
    <label
      htmlFor={`Address-${addressId}`}
      className={`${styles.card} highlight-card  mb-3 fadeInLeft`}
    >
      <div className="row flex-direction-row mb-2">
        <div className="col-md-1">
          <input
            id={`Address-${addressId}`}
            type="radio"
            name="optradio"
            className="text-primary"
            value={addressId}
            checked={isSelected}
            onChange={(e) => setSelectedAddressId(e.target.value)}
          />
        </div>
        <div className={`col-md-11 text-left `}>
          <div className="d-flex justify-content-between">
            <div className={` c-tag`}>
              <strong>{label}</strong>
            </div>
            <div className={`d-flex gap-10`}>
              <button
                className={`${styles.actionBtn}`}
                onClick={() => handleEditAddress(addressId)}
              >
                <span className="text-dark icon-pencil pointer"></span>
                Edit
              </button>

              <button
                className={styles.actionBtn}
                onClick={() => handleRemoveAddress(addressId)}
              >
                <span className="text-dark icon-delete pointer"></span>
                remove
              </button>
            </div>
          </div>

          <div className={styles.addressText}>
            <div>{name}</div>
            <div>
              {streetAddress}, {city}, {state}, {country}
            </div>
            <div>Pincode: {pincode}</div>
            <br />
            <div>
              Mobile: <strong>{phone}</strong>
            </div>
          </div>
        </div>
      </div>
    </label>
  )
}
export default AddressCard
