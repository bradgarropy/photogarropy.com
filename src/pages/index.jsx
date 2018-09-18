import React from "react"

// components
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

// styles
import "../scss/Carousel.scss"


const IndexPage = () => (

    <Layout>

        <Carousel
            images={[
                "/images/img_8855.jpg",
                "/images/img_8856.jpg",
                "/images/img_8857.jpg",
                "/images/img_8858.jpg",
                "/images/img_8859.jpg",
                "/images/img_8860.jpg",
                "/images/img_8861.jpg",
                "/images/img_8862.jpg",
            ]}
        />

    </Layout>

)


// export
export default IndexPage
