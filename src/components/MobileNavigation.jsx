import React from "react"
import {Link} from "gatsby"
import Helmet from "react-helmet"

// styles
import "../scss/MobileNavigation.scss"


class MobileNavigation extends React.Component {

    onClick() {
        console.log("Exit mobile navigation.")
    }

    render() {

        return (

            <div className="mobile-navigation">

                <Helmet>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
                </Helmet>

                <i
                    className="fas fa-lg fa-times"
                    onClick={this.onClick}
                />

                <div className="mobile-navigation-links">
                    <Link to="/about/">About</Link>
                    <Link to="/pricing/">Pricing</Link>
                    <Link to="/testimonials/">Testimonials</Link>
                    <Link to="/contact/">Contact</Link>
                </div>

            </div>

        )

    }

}


// export
export default MobileNavigation
