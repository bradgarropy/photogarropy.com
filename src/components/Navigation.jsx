import React from "react"

// components
import DesktopNavigation from "./DesktopNavigation"
import Hamburger from "./Hamburger"
import MobileNavigation from "./MobileNavigation"

// styles
import "../scss/Navigation.scss"


class Navigation extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <nav className="navigation">

                <DesktopNavigation/>

                <Hamburger>
                    <MobileNavigation/>
                </Hamburger>

            </nav>

        )

    }

}


// export
export default Navigation
