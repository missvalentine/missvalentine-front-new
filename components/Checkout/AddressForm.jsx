import React from 'react'

const AddressForm = (props) => {
  const {
    name,
    phone,
    pincode,
    streetAddress,
    city,
    state,
    label,
    setName,
    setPhone,
    setPincode,
    setStreetAddress,
    setCity,
    setState,
    setLabel,
    handleAddUpdateAddressSubmit,
    isEditable,
  } = props
  return (
    <div>
      <div className="pb-3  text-uppercase">
        <strong>Contact Details</strong>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Phone number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <hr />

      <div className=" pb-3  text-uppercase">
        <strong>ADDRESS DETAIL</strong>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Pincode*"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Address (House No, Building, Street, Area)*"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="City*"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="State*"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="pb-1 pb-2  text-uppercase">Save Address as</div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="home/office?"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="mt-5 text-center form-group">
        <button
          onClick={handleAddUpdateAddressSubmit}
          className="btn btn-primary-2 py-2 px-4 w-50 "
        >
          {`${isEditable ? 'Update Address' : 'Add Address'}`}
        </button>
      </div>
      {/* <div className="mt-2 text-center text-secondary small w-75 mx-auto">
        By creating an account you will agree Privacy Policy and Terms of
        Conditions
      </div> */}
    </div>
  )
}
export default AddressForm
