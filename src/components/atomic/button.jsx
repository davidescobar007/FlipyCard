import React from "react"
import PropTypes from "prop-types"

const Button = ({
   children,
   isSelected,
   color = "primary",
   size = "",
   isModalTrigger = false,
   onclick
}) => {
   return (
      <button
         className={`btn ${
            isSelected ? `btn-${color}` : `btn-${color}`
         } ${size}`}
         data-bs-target={`${isModalTrigger ? "#staticBackdrop" : ""}`}
         data-bs-toggle={`${isModalTrigger ? "modal" : ""}`}
         onClick={onclick}
         type=""
      >
         {children}
      </button>
   )
}

Button.propTypes = {
   children: PropTypes.node,
   color: PropTypes.string,
   isModalTrigger: PropTypes.bool,
   isSelected: PropTypes.bool,
   onclick: PropTypes.func,
   size: PropTypes.string
}

export default Button
