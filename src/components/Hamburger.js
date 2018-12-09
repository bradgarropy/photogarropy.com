import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// styles
import "../scss/Hamburger.scss"

class Hamburger extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    }

    state = {open: false}

    onClick = () => {
        this.setState({open: !this.state.open})
    }

    render = () => {
        return (
            <div className="hamburger">
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                    />
                </Helmet>

                <i className="fas fa-lg fa-bars" onClick={this.onClick}/>

                {this.state.open &&
                    this.props.children({onClick: this.onClick})}
            </div>
        )
    }
}

// export
export default Hamburger
