import React from 'react'
import { companyHQCountry } from '../../constant/projectSetting';

const ProductDetail=(props)=> {
	const {product} = props;

  return (
    <section className="ftco-section-extra bg-light">
    	<div className="container">
    		<div className="">
                <h3>Product Description</h3>
                <p>{product.description}</p>

                <h3>Wash Care</h3>
                <p><ul>
                  <li>Hand wash in warm water</li>
                  <li>Do not wring</li>
                  <li>Reshape cups whilst damp</li>
                  <li>Line dry in shade</li>
                  <li>Do not bleach/ dry clean/ iron.</li>
                </ul></p>

                <h3>Country of Origin</h3>
                <p>{companyHQCountry}</p>

                <h3>Country of Manufacturing</h3>
                <p>{companyHQCountry}</p>
            </div>
            </div>
    </section>
  )
}
export default ProductDetail