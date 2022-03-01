
import React from 'react'
import TopBanner from '../components/CustomComponents/TopBanner';
import PrivacyContent from '../components/Footer/PrivacyContent';
import withBaseLayout from '../components/Layout/BaseLayout';

const PrivacyPolicy=()=> {
    return (
    <div> 
        <TopBanner title="PRIVACY AND COOKIES POLICY" subtitle="Privacy Policy"/>
        <PrivacyContent />
    </div>
    )
}

export default withBaseLayout(PrivacyPolicy); 
