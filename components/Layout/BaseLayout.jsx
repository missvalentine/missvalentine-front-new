import React from 'react'
import dynamic from 'next/dynamic'
import {
  keywordString,
  projectDescription,
  projectName,
} from '../../constant/projectSetting'
import Head from 'next/head'

const Navbar = dynamic(() => import('../Navbar/Navbar'))
const Footer = dynamic(() => import('../Footer/Footer'))
const NewsletterSection = dynamic(() => import('../Homepage/NewsletterSection'))

function withBaseLayout(WrappedComponent, props) {
  const fixedNavbar = props?.fixedNavbar || true
  return function BaseFunction(pageProps) {
    return (
      <React.Fragment>
        <Head>
          <meta property="og:title" content={projectName} key="title" />
          <meta
            property="og:description"
            content={projectDescription}
            key="description"
          />
          <meta name="description" content={projectDescription} />
          <meta name="keywords" content={keywordString.replaceAll(' ', ',')} />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar fixedNavbar={fixedNavbar} />
        <WrappedComponent {...pageProps} />
        <NewsletterSection />
        <Footer />
      </React.Fragment>
    )
  }
}

export default withBaseLayout
