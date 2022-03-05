import React from 'react'

const contactOptions = [
  {
    heading: 'General Feedback or Questions',
    subHeading: 'Please contact us with any general questions or thoughts.',
  },
  {
    heading: 'Product Enquiry',
    subHeading: 'Questions you may have about specific products and ingredients.',
  },
  {
    heading: 'Wholesale Enquiry',
    subHeading: 'Questions about distributing MissValentine.',
  },
  // {
  //   heading: 'Press and Marketing Enquiry',
  //   subHeading: 'Questions you may have about press and marketing opportunities',
  // },
  {
    heading: 'Order Enquiry',
    subHeading: 'Questions about an order you have bought.',
  },
]
const ContactForm = () => {
  return (
    <div>
      <h4 className='mb-3'>
        WHAT CAN WE HELP YOU WITH?
      </h4>
    <div className="row p-3 p-md-5 bg-white">
    <div  className="col-12 mb-4">
      Please select a topic below related to your enquiry.
      </div>
      <div className="col-md-5 ">
      
        {contactOptions.map((_option) => (
          <div key={_option.heading} className="form-group ">
            <div className="row align-items-center">
              <div className="col-1">
                <input type="radio" name="optradio" className="text-primary" />
              </div>
              <div className="col-10">
                <h5 className="m-0">{_option.heading}</h5>
                <p className="mb-1">
                {_option.subHeading}
                </p>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
      <div className="col-md-7 ">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary py-3 px-5"
          />
        </div>
      </div>

      <div className="col-md-6 d-flex"></div>
    </div>
    </div>

  )
}

export default ContactForm
