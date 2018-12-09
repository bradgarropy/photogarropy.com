import React from "react"
import Helmet from "react-helmet"

// styles
import "../scss/Social.scss"


const Social = () => (

    <div className="social">

        <Helmet>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
        </Helmet>

        <a href="https://facebook.com/photogarropy">
            <i className="fab fa-2x fa-facebook-square"></i>
        </a>

        <a href="https://www.instagram.com/photogarropy">
            <i className="fab fa-2x fa-instagram"></i>
        </a>

    </div>

)


// export
export default Social
