import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"

// components
import Layout from "../components/Layout"

// styles
import "../scss/About.scss"

const About = ({data}) => {
    const about = data.allContentfulAbout.edges[0].node
    const photo = about.photo.file.url
    const description = about.description.description

    return (
        <Layout>
            <div className="container about">
                <img src={photo}/>
                <Markdown>{description}</Markdown>
            </div>
        </Layout>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulAbout {
            edges {
                node {
                    photo {
                        file {
                            url
                        }
                    }
                    description {
                        description
                    }
                }
            }
        }
    }
`

// export
export default About
