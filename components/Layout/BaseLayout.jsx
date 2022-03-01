import React from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../Navbar/Navbar'));
const Footer = dynamic(() => import('../Footer/Footer'));
const NewsletterSection = dynamic(() => import('../Homepage/NewsletterSection'));

function withBaseLayout(WrappedComponent, props){
    const fixedNavbar= props?.fixedNavbar || true;
    return function BaseFunction(){
        return (
            <React.Fragment>
                <Navbar fixedNavbar={fixedNavbar} />
                <WrappedComponent />
                <NewsletterSection />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withBaseLayout;