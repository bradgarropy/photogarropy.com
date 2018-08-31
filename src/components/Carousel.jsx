import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/Carousel.scss"


class Carousel extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            id: null,
            index: 0,
        }

        this.changeImage = this.changeImage.bind(this)

    }

    componentDidMount() {
        const id = setInterval(this.changeImage, 5000)
        this.setState({id})
    }

    componentWillUnmount() {
        clearInterval(this.state.id)
    }

    changeImage() {
        const carousel = document.getElementById("carousel")
        const index = (this.state.index === this.props.images.length - 1) ? 0 : this.state.index + 1
        const image = this.props.images[index]

        carousel.style.backgroundImage = `url(${image})`
        this.setState({index})
    }

    render() {

        const index = this.state.index
        const image = this.props.images[index]

        return (
            <div
                id="carousel"
                className="carousel"
                style={{backgroundImage: `url(${image})`}}
            />
        )

    }

}


Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}


// export
export default Carousel
