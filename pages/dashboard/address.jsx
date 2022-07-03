import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import withBaseLayout from '../../components/Layout/BaseLayout'
import withUserDashboardLayout from '../../components/Layout/UserDashboardLayout'
import AddressesView from '../../components/UserDashboard/AddressesView'
import { getUserAction } from '../../redux/actions/authActions'

const Address = (props) => {
  const dispatch = useDispatch()
  // const userAddresses=useSelector(state=>state.authState.user.addresses);
  useEffect(() => {
    dispatch(getUserAction)
  }, [])

  return (
    <section>
      <h5>Saved Addresses</h5>
      <hr />
      <AddressesView />
    </section>
  )
}

const HOCprops = {
  is: 'Address',
  screenName: 'Address',
  showNewsletterSection: false,
}
export default withBaseLayout(withUserDashboardLayout(Address), HOCprops)
