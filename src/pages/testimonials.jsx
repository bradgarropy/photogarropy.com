import React from "react"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Testimonials.scss"


const Testimonials = () => {

    return (

        <Layout>

            <div className="container testimonials">

                <div className="testimonial">
                    <img src="/images/img_8856.jpg"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.</p>
                </div>

                <div className="testimonial">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.</p>
                    <img src="/images/img_8857.jpg"/>
                </div>

                <div className="testimonial">
                    <img src="/images/img_8858.jpg"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.</p>
                </div>

            </div>

        </Layout>

    )

}


// export
export default Testimonials
