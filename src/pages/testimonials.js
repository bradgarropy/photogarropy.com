import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Testimonials.scss"

const Testimonials = ({data}) => {
    const testimonials = data.file.childContentJson.testimonials

    return (
        <Layout>
            <div className="container testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image}/>
                        <p>{testimonial.quote}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        file(name: {eq: "testimonials"}) {
            name
            childContentJson {
                testimonials {
                    image
                    quote
                    client
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
