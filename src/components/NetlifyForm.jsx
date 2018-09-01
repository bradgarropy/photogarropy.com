import React from "react"
import PropTypes from "prop-types"


const NetlifyForm = ({name, className, children}) => {

    return (

        <form
            name={name}
            className={className}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >

            <input type="hidden" name="bot-field"/>
            <input type="hidden" name="form-name" value="contact"/>

            {children}

        </form>

    )

}


NetlifyForm.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}


NetlifyForm.defaultProps = {
    className: "",
}


// export
export default NetlifyForm
