import React from "react"

// components
import Layout from "../components/Layout"
import NetlifyForm from "../components/NetlifyForm"

// styles
import "../scss/Contact.scss"


const Contact = () => {

    return (

        <Layout>

            <div className="container contact">

                <div>

                    <p>Let's get in touch!</p>
                    <p>I would love to book an appointment or answer any questions!</p>

                    <NetlifyForm
                        name="contact"
                        className="contact-form"
                        action="/thanks/"
                    >

                        <div className="contact-form-field">
                            <label>Name</label>
                            <input type="text" name="name"/>
                        </div>

                        <div className="contact-form-field">
                            <label>Email</label>
                            <input type="email" name="email"/>
                        </div>

                        <div className="contact-form-field">
                            <label>Message</label>
                            <textarea rows="4" name="message"></textarea>
                        </div>

                        <button type="submit">Submit</button>

                    </NetlifyForm>

                </div>

                <img src="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8859.jpg"/>

            </div>

        </Layout>

    )

}


// export
export default Contact
