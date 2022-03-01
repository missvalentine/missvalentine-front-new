import React from 'react'
import SendMessage from '../components/ConactUs/SendMessage';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const EnquiryForm=()=> {
  return (
    <div> 
      <TopBanner title="ENQUIRY FORM" subtitle="ENQUIRY FORM"/>
    <SendMessage />
    </div>
  )
}

export default withBaseLayout(EnquiryForm); 
