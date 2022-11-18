import React from "react"
import PropTypes from "prop-types"

const buttonTypes = {
   PRIMARY: "border-green-600 text-white bg-green-600",
   INFO: "border-blue-500 bg-blue-500 text-white"
}

function Button({
   type,
   children,
   typeOf,
   extraClassname,
   dangerouslyResetClassName,
   ...rest
}) {
   return (
      <button
         className={
            (dangerouslyResetClassName && extraClassname) ||
            `my-1 rounded-lg border-2 px-4 py-1 text-lg shadow-md ${buttonTypes[typeOf]} ${extraClassname}`
         }
         {...rest}
         type={type}
      >
         {children}
      </button>
   )
}
Button.defaultProps = {
   extraClassname: "",
   dangerouslyResetClassName: false,
   type: "button",
   typeOf: "PRIMARY"
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   extraClassname: PropTypes.string,
   type: PropTypes.string,
   typeOf: PropTypes.oneOf(["PRIMARY", "INFO"]),
   dangerouslyResetClassName: PropTypes.bool
}

export default Button
