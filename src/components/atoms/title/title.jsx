import React from "react"
import PropTypes from "prop-types"

export default function Title({ children, type, extraClassName }) {
   const cssClass = `text-primary  ${extraClassName}`
   if (type === "h1") return <h1 className={cssClass}>{children}</h1>
   if (type === "h2") return <h2 className={cssClass}>{children}</h2>
   if (type === "h3") return <h3 className={cssClass}>{children}</h3>
   if (type === "h4") return <h4 className={cssClass}>{children}</h4>
   if (type === "h5") return <h5 className={cssClass}>{children}</h5>
}

Title.defaultProps = {
   extraClassName: ""
}

Title.propTypes = {
   children: PropTypes.any.isRequired,
   extraClassName: PropTypes.string,
   type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]).isRequired
}
