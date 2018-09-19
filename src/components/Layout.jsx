import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "./Navigation"
import Footer from "./Footer"

// styles
import "../scss/reset.scss"
import "../scss/Layout.scss"


const Layout = ({children}) => {

    return (

        <div className="layout">

            <Helmet>
                <title>photogarropy</title>
                <meta name="description" content="📷 wife's photography business"/>
                <meta name="keywords" content="gatsby, react, markdown, scss, eslint, photography"/>
                <link rel="icon" type="image/png" href="/icons/favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="/icons/favicon-128x128.png" sizes="128x128" />
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
            </Helmet>


            <Navigation/>

            <div className="content">
                {children}
            </div>

            <Footer/>

        </div>

    )

}


Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
}


// export
export default Layout
