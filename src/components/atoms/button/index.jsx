import React from "react"
import PropTypes from "prop-types"

const buttonTypes = {
   PRIMARY: "btn-primary text-white",
   SECONDARY: "btn-secondary",
   INFO: "btn-info"
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
            `btn rounded-lg py-1 target:bg-transparent ${buttonTypes[typeOf]} ${extraClassname}`
         }
         {...rest}
         type={type}
      >
         {children}
      </button>
   )
}
Button.defaultProps = {
   dangerouslyResetClassName: false,
   extraClassname: "",
   type: "button",
   typeOf: "PRIMARY"
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   dangerouslyResetClassName: PropTypes.bool,
   extraClassname: PropTypes.string,
   type: PropTypes.string,
   typeOf: PropTypes.oneOf(["PRIMARY", "INFO", "SECONDARY"])
}

export default Button
