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
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8855.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8856.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8857.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8858.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8859.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8860.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8861.jpg",
                "https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8862.jpg",
            ]}
        />

    </Layout>

)


// export
export default IndexPage
