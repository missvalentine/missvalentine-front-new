import React from 'react'

import withBaseLayout from '../../components/Layout/BaseLayout'
import withUserDashboardLayout from '../../components/Layout/UserDashboardLayout'
import AddressesView from '../../components/UserDashboard/AddressesView'

const Address = (props) => {
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
