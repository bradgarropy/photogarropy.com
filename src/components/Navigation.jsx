import React from "react"
import {Link} from "gatsby"

// styles
import "../scss/Navigation.scss"


const Navigation = () => {

    return (

        <div className="navigation">

            <div className="navigation-left">
                <Link to="/">photogarropy</Link>
            </div>

            <div className="navigation-right">
                <Link to="/about/">About</Link>
                <Link to="/pricing/">Pricing</Link>
                <Link to="/testimonials/">Testimonials</Link>
                <Link to="/what-to-expect/">What To Expect</Link>
                <Link to="/contact/">Contact</Link>
            </div>

        </div>

    )

}


// export
export default Navigation
