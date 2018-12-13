import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

// styles
import "../scss/Carousel.scss"

const Index = ({data}) => {
    const carousel = data.allContentfulCarousel.edges[0].node
    const photos = carousel.photos.map(photo => photo.file.url)

    return (
        <Layout>
            <Carousel images={photos}/>
        </Layout>
    )
}

Index.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulCarousel {
            edges {
                node {
                    photos {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`

// export
export default Index
