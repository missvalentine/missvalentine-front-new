import React from 'react'
import { useSelector } from 'react-redux';
const EQform =()=> {
  const allCategories = useSelector((state) => state.categoryState.categories);

  return (
    <section className="ftco-section-2 contact-section bg-light">
      <div className="container bg-white p-5 contact-form block-9">
        <div className="row ">
            <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name='name'
                />
              </div>
              <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name='phoneNo'
                />
              </div>
            <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Store Name"
                  name='storeName'
                />
              </div>
            <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Store Address"
                  name='storeAddress'
                />
              </div>
            <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name='city'
                />
              </div>
            <div className="form-group col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name='state'
                />
              </div>
        </div>
        <hr/>
        <div className="row ">
            <div className="form-group col-md-4 ">
            <div className="select-wrap">
                    {/* <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div> */}
                    <h5>Product Category</h5>
                    <select name="" id="" className="form-control">
                      {allCategories.map(_category=> <option value={_category.slug}>{_category.name}</option>)}
                    </select>
                  </div>
            </div>
          </div>
        {/* <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div> */}
      </div>
    </section>
  )
}

export default EQform;