import React from "react"
import {Link} from "gatsby"
import Helmet from "react-helmet"

// components
import Hamburger from "../components/Hamburger"

// styles
import "../scss/MobileNavigation.scss"

const MobileNavigation = () => {
    return (
        <Hamburger>
            {({onClick}) => (
                <div className="mobile-navigation">
                    <Helmet>
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                        />
                    </Helmet>

                    <i className="fas fa-lg fa-times" onClick={onClick}/>

                    <div className="mobile-navigation-links">
                        <Link to="/about/">About</Link>
                        <Link to="/pricing/">Pricing</Link>
                        <Link to="/testimonials/">Testimonials</Link>
                        <Link to="/contact/">Contact</Link>
                    </div>
                </div>
            )}
        </Hamburger>
    )
}

// export
export default MobileNavigation
