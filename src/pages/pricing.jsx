import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Pricing.scss"


const Pricing = ({data}) => {

    const content = data.file.childMarkdownRemark.html

    return (

        <Layout>

            <div className="container pricing">

                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />

            </div>

        </Layout>

    )

}


Pricing.propTypes = {
    data: PropTypes.object.isRequired,
}


export const query = graphql`
    {
        file (name: {eq: "pricing"}) {
            childMarkdownRemark {
                html
            }
        }
    }
`


// export
export default Pricing
