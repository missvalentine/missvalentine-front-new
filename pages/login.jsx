import React from 'react'
import withBaseLayout from '../components/Layout/BaseLayout'
import LoginBox from '../components/Login/LoginBox'

const Login = () => {
  return (
    <section>
      <LoginBox />
    </section>
  )
}
export default withBaseLayout(Login)
