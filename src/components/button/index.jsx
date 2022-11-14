import React from "react"
import PropTypes from "prop-types"

const buttonTypes = {
   PRIMARY: "border-orange-600 text-orange-700",
   INFO: "border-blue-900 bg-blue-900 text-white"
}

function Button({ type, children, typeOf, extraClassname, ...rest }) {
   return (
      <button
         className={`my-1 rounded-sm border-2  px-4 py-1 shadow-md ${buttonTypes[typeOf]} ${extraClassname}`}
         type={type}
         {...rest}
      >
         {children}
      </button>
   )
}
Button.defaultProps = {
   extraClassname: "",
   type: "button",
   typeOf: "PRIMARY"
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   extraClassname: PropTypes.string,
   type: PropTypes.string,
   typeOf: PropTypes.oneOf(["PRIMARY", "INFO"])
}

export default Button
