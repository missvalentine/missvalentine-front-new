import React from 'react'
import { useSelector } from 'react-redux'
import withBaseLayout from '../../components/Layout/BaseLayout'
import withUserDashboardLayout from '../../components/Layout/UserDashboardLayout'
import ProfileView from '../../components/UserDashboard/ProfileView'

const Dashboard = () => {
  const userState = useSelector((state) => state.authState.user)

  return (
    <div>
      <ProfileView
        name={userState.name}
        email={userState.email}
        phoneNo={userState.phoneNo}
        createdAt={userState.createdAt}
        updatedAt={userState.updatedAt}
      />
    </div>
  )
}

const HOCprops = {
  is: 'Dashboard',
  screenName: 'Dashboard',
  showNewsletterSection: false,
}

export default withBaseLayout(withUserDashboardLayout(Dashboard), HOCprops)
