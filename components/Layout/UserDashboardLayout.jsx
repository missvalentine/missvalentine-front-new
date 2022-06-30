import React from 'react'
import dynamic from 'next/dynamic'

import { useSelector } from 'react-redux'

const OptionMenu = dynamic(() => import('../UserDashboard/OptionMenu'))

function withUserDashboardLayout(WrappedComponent, props = {}) {
  return function UserDashboardBaseFunction(pageProps) {
    const userState = useSelector((state) => state.authState.user)

    return (
      <React.Fragment>
        <section className="ftco-section-2 bg-white ">
          <div className="container px-5">
            <h3 className="m-0">Account</h3>
            <div>{userState.name}</div>

            <hr />
            <div className="row ">
              <div className="col-3">
                <OptionMenu />
              </div>
              <div className=" vline" />
              <div className="col-8">
                <WrappedComponent {...props} {...pageProps} />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default withUserDashboardLayout
