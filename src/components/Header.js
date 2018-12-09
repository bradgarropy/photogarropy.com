import React from "react"
import {Link} from "gatsby"

// components
import Navigation from "./Navigation"

// styles
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                photogarropy
            </Link>

            <Navigation/>
        </header>
    )
}

// export
export default Header
