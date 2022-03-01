
import React from 'react'

import TopBanner from '../components/CustomComponents/TopBanner';
import AccessibilityContent from '../components/Footer/AccessibilityContent';
import withBaseLayout from '../components/Layout/BaseLayout';

const PrivacyPolicy=()=> {
    return (
    <div> 
        <TopBanner title="WEBSITE ACCESSIBILITY" subtitle="WEBSITE ACCESSIBILITY"/>
        <AccessibilityContent />
    </div>
    )
}

export default withBaseLayout(PrivacyPolicy); 
