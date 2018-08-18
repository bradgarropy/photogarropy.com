import React from "react"

// components
import Logo from "./Logo"

// styles
import "../scss/PoweredBy.scss"


const PoweredBy = () => (

    <div className="powered-by">

        <p>powered by</p>

        <a href="https://bradgarropy.com">
            <Logo/>
        </a>

    </div>

)


// export
export default PoweredBy
