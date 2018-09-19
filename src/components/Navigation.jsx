import React from "react"
import Helmet from "react-helmet"

// components
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

// styles
import "../scss/Navigation.scss"


class Navigation extends React.Component {

    constructor(props) {

        super(props)
        this.links = React.createRef()
        this.onClick = this.onClick.bind(this)

    }

    onClick() {
        const links = this.links.current
        const {display} = window.getComputedStyle(links)

        if(display === "none") {
            links.style.display = "grid"
        }
        else {
            links.style.display = "none"
        }
    }

    render() {

        return (

            <nav className="navigation">

                <Helmet>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
                </Helmet>

                <i
                    className="fas fa-lg fa-bars"
                    onClick={this.onClick}
                />

                <DesktopNavigation/>
                <MobileNavigation/>

            </nav>

        )

    }

}


// export
export default Navigation
