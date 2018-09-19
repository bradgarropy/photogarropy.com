import React from "react"
import {Link} from "gatsby"

// styles
import "../scss/MobileNavigation.scss"


const MobileNavigation = () => {

    return (

        <div className="mobile-navigation">
            <Link to="/about/">About</Link>
            <Link to="/pricing/">Pricing</Link>
            <Link to="/testimonials/">Testimonials</Link>
            <Link to="/contact/">Contact</Link>
        </div>

    )

}


// export
export default MobileNavigation
