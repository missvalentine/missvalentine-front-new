import React from 'react'

import Head from 'next/head'
import EQform from '../components/Catalouge/EQForm'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'
import { projectName } from '../constant/projectSetting'

const EnquiryForm = () => {
  return (
    <div>
      <Head>
        <title>{`ENQUIRY FORM | ${projectName}`}</title>
      </Head>
      <TopBanner title="ENQUIRY FORM" subtitle="ENQUIRY FORM" />
      <EQform />
    </div>
  )
}

export default withBaseLayout(EnquiryForm)
