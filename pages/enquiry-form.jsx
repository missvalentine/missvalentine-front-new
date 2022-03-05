import React from 'react'
import EQform from '../components/Catalouge/EQForm';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const EnquiryForm=()=> {
  return (
    <div> 
      <TopBanner title="ENQUIRY FORM" subtitle="ENQUIRY FORM"/>
      <EQform />
    </div>
  )
}

export default withBaseLayout(EnquiryForm); 
