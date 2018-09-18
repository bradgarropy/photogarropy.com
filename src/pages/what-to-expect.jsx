import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"


const WhatToExpect = ({data}) => {

    const content = data.file.childMarkdownRemark.html

    return (

        <Layout>

            <div className="container what-to-expect">

                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />

            </div>

        </Layout>

    )

}


WhatToExpect.propTypes = {
    data: PropTypes.object.isRequired,
}


export const query = graphql`
    {
        file (name: {eq: "what-to-expect"}) {
            childMarkdownRemark {
                html
            }
        }
    }
`


// export
export default WhatToExpect
