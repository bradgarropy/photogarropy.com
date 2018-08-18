import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// styles
import "./index.css"


const IndexLayout = ({children}) => {

    return (

        <div>

            <Helmet>
                <title>photogarropy</title>
                <meta name="description" content="Sample"/>
                <meta name="keywords" content="sample, something"/>
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
