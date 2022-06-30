import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'

import { toast } from 'react-toastify'
import { DialogHeader, useDialog } from 'realayers'
import {
  addAddressAction,
  deleteAddressAction,
  updateAddressAction,
} from '../../redux/actions/authActions'
import { callApi } from '../../utils/callApi'

const AddressCard = dynamic(() => import('../Checkout/AddressCard'))
const AddressForm = dynamic(() => import('../Checkout/AddressForm'))

import styles from './UserDashboard.module.scss'

const AddressesView = (props) => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.authState.user)
  const userAddresses = userState.addresses

  const { toggleOpen, setOpen, Dialog } = useDialog()

  const [name, setName] = useState(userState?.name || '')
  const [phone, setPhone] = useState(userState?.phoneNo || '')

  const [pincode, setPincode] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [label, setLabel] = useState('')

  //if its false then ist Add mode else Edit Mode
  const [editAddressId, setEditAddressId] = useState()

  //Order
  const [selectedAddressId, setSelectedAddressId] = useState(
    userState?.addresses?.length > 0 ? userState?.addresses[0]._id : '',
  )
  //Actions

  const handleAddAddress = () => {
    setLabel('')
    setStreetAddress('')
    setCity('')
    setState('')
    setPincode('')
    toggleOpen()
  }

  const handleEditAddress = async (addressId) => {
    setEditAddressId(addressId)
    try {
      //Validations
      const response = await callApi({
        method: 'get',
        url: `/user/get-address?address_id=${addressId}`,
      })
      if (response && response.status == 200) {
        setName(response.data.data?.name)
        setPhone(response.data.data?.phone)
        setLabel(response.data.data?.label)
        setStreetAddress(response.data.data?.streetAddress)
        setCity(response.data.data?.city)
        setState(response.data.data?.state)
        setPincode(response.data.data?.pincode)
        setOpen(true)
      } else {
        toast.error("Could'nt edit address right now! 🤯")
      }
    } catch (error) {
      console.log(error)
      toast.error("Could'nt edit address right now! 🤯")
    }
  }

  const handleRemoveAddress = (addressId) => {
    dispatch(deleteAddressAction(addressId))
    toast.success('Address Removed Successfully!')
    setSelectedAddressId(null)
  }

  const handleAddUpdateAddressSubmit = async (e) => {
    try {
      e.preventDefault()
      //Validations
      const dataToSend = {
        name,
        phone,
        pincode,
        streetAddress,
        city,
        state,
        label,
      }
      let response
      if (editAddressId) {
        response = await callApi({
          method: 'put',
          url: `/user/update-address?address_id=${editAddressId}`,
          data: dataToSend,
        })
      } else {
        response = await callApi({
          method: 'post',
          url: '/user/add-address',
          data: dataToSend,
        })
      }
      if (response && response.status == 200) {
        setOpen(false)
        setLabel()
        setStreetAddress()
        setCity()
        setState()
        setPincode()
        if (editAddressId) {
          toast.success('Address Added Successfully👌')
          dispatch(updateAddressAction(response.data.data))
        } else {
          toast.success('Address Edited Successfully👌')
          dispatch(addAddressAction(response.data.data))
        }
        setEditAddressId()
      } else {
        toast.error('Invalid Input!🤯')
      }
    } catch (error) {
      console.log(error)
      toast.error("Could'nt add address right now! 🤯")
    }
  }

  return (
    <section>
      {userAddresses?.length > 0 &&
        userAddresses.map((address) => (
          <AddressCard
            key={`Addresscard_${address._id}`}
            addressId={address._id}
            name={address.name}
            phone={address.phone}
            label={address.label}
            streetAddress={address.streetAddress}
            city={address.city}
            state={address.state}
            country={address.country}
            pincode={address.pincode}
            isSelectable={props.isSelectable}
            handleEditAddress={handleEditAddress}
            handleRemoveAddress={handleRemoveAddress}
            isSelected={selectedAddressId === address._id}
            setSelectedAddressId={setSelectedAddressId}
          />
        ))}
      <div onClick={handleAddAddress} className={styles.newAddressCard}>
        &nbsp;+ &nbsp; Add New Address
      </div>

      <Dialog
        innerClassName={{
          background: 'white',
        }}
        headerElement={
          <DialogHeader className="dialog-header" showCloseButton={false} />
        }
        // header={<div className="text-white display-4 ">Add new Address</div>}
      >
        <AddressForm
          name={name}
          phone={phone}
          label={label}
          streetAddress={streetAddress}
          city={city}
          state={state}
          pincode={pincode}
          //setters
          setName={setName}
          setPhone={setPhone}
          setLabel={setLabel}
          setStreetAddress={setStreetAddress}
          setCity={setCity}
          setState={setState}
          setPincode={setPincode}
          //Actions
          handleAddUpdateAddressSubmit={handleAddUpdateAddressSubmit}
          isEditable={editAddressId}
        />
      </Dialog>
    </section>
  )
}

export default AddressesView
