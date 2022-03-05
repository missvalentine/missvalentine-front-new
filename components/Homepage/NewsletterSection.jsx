import React from 'react'
import DisplayCard from '../CustomComponents/DisplayCard'
import { toast } from 'react-toastify'
import { callApi } from '../../utils/callApi'
import { EmailReg } from '../../utils/regEx'

const NewsletterSection = () => {
  const handleSubscribeSubmit = async (e) => {
    try {
      e.preventDefault()
      const email = e.target.email.value
      if (!EmailReg.test(email)) {
        toast.error('Please enter a valid email!');
        e.target.reset();
        return;
      }
      const dataToSend = { email, callScreen: 'footer' }
      toast.promise(()=>callApi({
        method: 'post',
        url: '/contact',
        data: dataToSend,
      }), {
        pending: 'Subscribing to Newsletter & Promotions',
        success: 'Subscribed to  Newsletters👌',
        error: 'Could\'nt Subscribe to Newsletter right now! 🤯',
      })
    } catch (error) {
      toast.error("Could'nt Subscribe to Newsletter right now! 🤯")
    }
    e.target.reset();
  }

  return (
    <DisplayCard
      id="trending"
      heading="Subscribe"
      subHeading="SUBCRIBE TO OUR NEWSLETTER"
      bgColor="white"
    >
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-4">
          <form onSubmit={handleSubscribeSubmit} className="subscribe-form">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
                name="email"
              />
              <input type="submit" value="Subscribe" className="submit px-3" />
            </div>
          </form>
        </div>
      </div>
    </DisplayCard>
  )
}

export default NewsletterSection
