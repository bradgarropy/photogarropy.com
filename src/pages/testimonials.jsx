import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Testimonials.scss"


const Testimonials = () => {

    return (

        <Layout>

            <div className="container testimonials">

                <div className="testimonial">
                    <img src="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8856.jpg"/>
                    <p>Our family photoshoot went so well! Gaby got along great with my children and captured some great moments of us. I would definitely use her services again!</p>
                </div>

                <div className="testimonial">
                    <img src="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8857.jpg"/>
                    <p>My birthday boy was so excited to get his picture taken and eat his cake, and Gaby got every second of it on camera! Who knew my friend had such a great eye for photography?!</p>
                </div>

                <div className="testimonial">
                    <img src="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8858.jpg"/>
                    <p>We wanted our family photos to capture who we are, so Gaby suggested that we take them at our favorite place. The park was beautiful and Gaby brought that to life in our family photos!</p>
                </div>

            </div>

        </Layout>

    )

}


export const query = graphql`
    {
        allFile (filter: {name: {glob:"testimonial-*"}}) {
            edges {
                node {
                    name
                    childMarkdownRemark {
                        rawMarkdownBody
                    }
                }
            }
        }
    }

`


Testimonials.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Testimonials
