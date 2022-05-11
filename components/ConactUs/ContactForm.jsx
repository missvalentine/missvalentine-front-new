import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { callApi } from '../../utils/callApi'

const contactOptions = [
  {
    heading: 'General Feedback or Questions',
    subHeading: 'Please contact us with any general questions or thoughts.',
    type: 'General Feedback or Questions',
  },
  {
    heading: 'Product Enquiry',
    subHeading:
      'Questions you may have about specific products and ingredients.',
    type: 'Product Enquiry',
  },
  {
    heading: 'Wholesale Enquiry',
    subHeading: 'Questions about distributing MissValentine.',
    type: 'Wholesale Enquiry',
  },
  // {
  //   heading: 'Press and Marketing Enquiry',
  //   subHeading: 'Questions you may have about press and marketing opportunities',
  // },
  {
    heading: 'Order Enquiry',
    subHeading: 'Questions about an order you have bought.',
    type: 'Order Enquiry',
  },
]
const ContactForm = () => {
  const [queryType, setQueryType] = useState('General Feedback or Questions')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSendMessage = async (e) => {
    try {
      // if (!EmailReg.test(email)) {
      //   toast.error('Please enter a valid email!')
      //   e.target.reset()
      //   return
      // }
      const dataToSend = {
        callScreen: 'contactPage',
        name: name,
        email: email,
        subject: subject,
        text: message,
        queryType: queryType,
      }
      const response = await toast.promise(
        () =>
          callApi({
            method: 'post',
            url: '/contact',
            data: dataToSend,
          }),
        {
          pending: 'Submitting your feedback query',
          success: 'Query Submitted👌',
          error: "Could'nt submit your feedback query! 🤯",
        },
      )
      if (response) {
        setQueryType(null)
        setEmail('')
        setName('')
        setSubject('')
        setMessage('')
      }
    } catch (error) {
      console.log('error', error)
      toast.error("Could'nt submit your feedback query! 🤯")
    }
  }

  return (
    <div>
      <h4 className="mb-3">WHAT CAN WE HELP YOU WITH?</h4>
      <div className="row p-3 p-md-5 bg-white">
        <div className="col-12 mb-4">
          Please select a topic below related to your enquiry.
        </div>
        <div className="col-md-5 ">
          {contactOptions.map((_option) => (
            <label
              for={_option.type}
              key={_option.heading}
              className="form-group"
            >
              <div className="row align-items-center">
                <div className="col-1">
                  <input
                    id={_option.type}
                    type="radio"
                    name="optradio"
                    className="text-primary"
                    value={_option.type}
                    checked={queryType === _option.type}
                    onChange={(e) => setQueryType(e.target.value)}
                  />
                </div>
                <div className="col-10">
                  <h5 className="m-0">{_option.heading}</h5>
                  <p className="mb-1">{_option.subHeading}</p>
                </div>
              </div>
              <hr />
            </label>
          ))}
        </div>
        <div className="col-md-7 ">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              className="form-control"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              onClick={handleSendMessage}
              className="btn btn-primary-2 py-3 px-5"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="col-md-6 d-flex"></div>
      </div>
    </div>
  )
}

export default ContactForm
