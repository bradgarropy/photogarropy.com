import React from "react"
import Link from "gatsby-link"

// styles
import "./Navigation.css"


const Navigation = () => {

    return (

        <div className="navigation">

            <div className="navigation-left">
                <a href="/">photogarropy</a>
            </div>

            <div className="navigation-right">
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/what-to-expect">What To Expect</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </div>

    )

}


// export
export default Navigation
