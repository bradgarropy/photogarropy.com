import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"

// components
import Layout from "../components/Layout"

// styles
import "../scss/Pricing.scss"

const Pricing = ({data}) => {
    const pricing = data.allContentfulPricing.edges[0].node
    const description = pricing.description.description

    return (
        <Layout>
            <div className="container pricing">
                <Markdown>{description}</Markdown>
            </div>
        </Layout>
    )
}

Pricing.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulPricing {
            edges {
                node {
                    description {
                        description
                    }
                }
            }
        }
    }
`

// export
export default Pricing
