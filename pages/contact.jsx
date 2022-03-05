import React from 'react'
import ContactForm from '../components/ConactUs/ContactForm'
import ContactInfo from '../components/ConactUs/ContactInfo'
import OfficeMap from '../components/ConactUs/OfficeMap'
import TopBanner from '../components/CustomComponents/TopBanner'
import withBaseLayout from '../components/Layout/BaseLayout'

const contact = () => {
  return (
    <div>
      <TopBanner title="Contact Us" subtitle="Conact" />
      <section className="ftco-section-2 contact-section bg-light">
        <div className="container">
          <ContactForm />
          <ContactInfo />
          <OfficeMap />
        </div>
      </section>
    </div>
  )
}

export default withBaseLayout(contact)
