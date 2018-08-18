import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


const IndexLayout = ({children}) => {

    return (

        <div>

            <Helmet>
                <title>photogarropy</title>
                <meta name="description" content="Sample"/>
                <meta name="keywords" content="sample, something"/>
                <link rel="icon" type="image/png" href="icons/favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="icons/favicon-128x128.png" sizes="128x128" />
                <link rel="icon" type="image/png" href="icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="icons/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="icons/favicon-16x16.png" sizes="16x16" />
            </Helmet>

            <Navigation/>

            {children()}

            <Footer/>

        </div>

    )

}


IndexLayout.propTypes = {
    children: PropTypes.func,
}


// export
export default IndexLayout
