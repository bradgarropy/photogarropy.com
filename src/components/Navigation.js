import React from "react"

// components
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

// styles
import "../scss/Navigation.scss"

const Navigation = () => {
    return (
        <nav className="navigation">
            <DesktopNavigation/>
            <MobileNavigation/>
        </nav>
    )
}

// export
export default Navigation
