import React from 'react'
import BoardMembers from '../components/About/BoardMembers';
import TopBanner from '../components/CustomComponents/TopBanner';
import InfoSection from '../components/Homepage/InfoSection';
import withBaseLayout from '../components/Layout/BaseLayout';

const About=()=> {
  return (
    <div> 
      <TopBanner title="About" subtitle="About"/>
      <InfoSection />
      <BoardMembers/>
    </div>
  )
}

export default withBaseLayout(About); 
