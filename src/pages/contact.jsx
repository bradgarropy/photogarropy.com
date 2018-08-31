import React from "react"

// components
import Honeypot from "../components/Honeypot"

// styles
import "../scss/Contact.scss"


const Contact = () => {

    return (

        <div className="container contact">

            <div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>

                <form
                    id="contact-form"
                    className="contact-form"
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >

                    <Honeypot/>

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

                </form>

            </div>

            <img src="/images/img_8859.jpg"/>

        </div>

    )

}


// export
export default Contact
