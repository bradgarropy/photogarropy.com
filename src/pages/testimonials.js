import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Testimonials.scss"

const Testimonials = ({data}) => {
    const testimonials = data.allContentfulTestimonial.edges

    return (
        <Layout>
            <div className="container testimonials">
                {testimonials.map(testimonial => {
                    const id = testimonial.node.contentful_id
                    const photo = testimonial.node.photo.file.url
                    const quote = testimonial.node.quote.quote

                    return (
                        <div key={id} className="testimonial">
                            <img src={photo}/>
                            <Markdown>{quote}</Markdown>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

Testimonials.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulTestimonial {
            edges {
                node {
                    contentful_id
                    photo {
                        file {
                            url
                        }
                    }
                    quote {
                        quote
                    }
                }
            }
        }
    }
`

// export
export default Testimonials
