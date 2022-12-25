import React from "react"
import PropTypes from "prop-types"

function Input({ type, extraClassName, innerRef, ...rest }) {
   return (
      <input
         ref={innerRef}
         type={type}
         {...rest}
         className={"max-w-xs input input-bordered w-full " + extraClassName}
      />
   )
}

Input.defaultProps = {
   extraClassName: "",
   type: "text"
}

Input.propTypes = {
   extraClassName: PropTypes.string,
   innerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
      .isRequired,
   type: PropTypes.string
}

export default Input
