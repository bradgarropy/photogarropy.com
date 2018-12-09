import React from "react"
import {Link} from "gatsby"

// styles
import "../scss/DesktopNavigation.scss"

const DesktopNavigation = () => {
    return (
        <div className="desktop-navigation">
            <Link to="/about/">About</Link>
            <Link to="/pricing/">Pricing</Link>
            <Link to="/testimonials/">Testimonials</Link>
            <Link to="/contact/">Contact</Link>
        </div>
    )
}

// export
export default DesktopNavigation
