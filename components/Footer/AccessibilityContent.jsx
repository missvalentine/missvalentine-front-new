
    import React from 'react'
    import { comapanyUrl, companyHQCountry, companyInfoEmail, projectName } from '../../constant/projectSetting'
    export default function AccessibilityContent()
    {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <h3 className='text-uppercase'>
                            WELCOME TO {projectName}
                        </h3>
                        <p>
                            {projectName} , a innerwear company based in {companyHQCountry}. {projectName} collectively referred to in this privacy policy as “ {projectName} ” the “Company” or sometimes “we” or “us” or “our”), operates the website located at the URL {comapanyUrl} (together with any other website or applications branded as {projectName} (collectively, the “Website”). {projectName} is committed to making our website accessible to all our customers. We have been making changes to improve website accessibility and will continue to monitor and make improvements going forward. If you would like to send us feedback about our website, please contact us using the email: {companyInfoEmail}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
    