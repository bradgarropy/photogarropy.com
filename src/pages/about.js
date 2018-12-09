import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"

// styles
import "../scss/About.scss"


const About = ({data}) => {

    const content = data.file.childMarkdownRemark.html

    return (

        <Layout>

            <div className="container about">

                <img src="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8855.jpg"/>

                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />

            </div>

        </Layout>

    )

}


About.propTypes = {
    data: PropTypes.object.isRequired,
}


export const query = graphql`
    {
        file (name: {eq: "about"}) {
            childMarkdownRemark {
                html
            }
        }
    }
`


// export
export default About
