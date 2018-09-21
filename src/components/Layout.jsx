import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Header from "./Header"
import Footer from "./Footer"

// styles
import "../scss/reset.scss"
import "../scss/Layout.scss"


const Layout = ({children}) => {

    return (

        <div className="layout">

            <Helmet>
                <title>photogarropy</title>

                <meta name="description" content="Browse my work and book a shoot with me!"/>
                <meta name="keywords" content="gatsby, react, markdown, scss, eslint, photography"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@mrsgarropy"/>
                <meta name="twitter:title" content="📷 photogarropy"/>
                <meta name="twitter:description" content="Browse my work and book a shoot with me!"/>
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto/photogarropy/img_8855.jpg"/>

                <link rel="icon" type="image/png" href="/icons/favicon-196x196.png" sizes="196x196"/>
                <link rel="icon" type="image/png" href="/icons/favicon-128x128.png" sizes="128x128"/>
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16"/>
            </Helmet>


            <Header/>

            <div className="content">
                {children}
            </div>

            <Footer/>

        </div>

    )

}


Layout.propTypes = {
    children: PropTypes.node,
}


// export
export default Layout
