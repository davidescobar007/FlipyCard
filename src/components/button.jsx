import React from "react"
import PropTypes from "prop-types"

const Button = ({
   text = "Example",
   isSelected,
   color = "primary",
   size = "",
   isModalTrigger = false,
   onclick
}) => {
   return (
      <div>
         <button
            className={`btn ${
               isSelected ? `btn-${color}` : `btn-${color}`
            } ${size}`}
            data-bs-target={`${isModalTrigger ? "#staticBackdrop" : ""}`}
            data-bs-toggle={`${isModalTrigger ? "modal" : ""}`}
            onClick={onclick}
            type="button"
         >
            {text}
         </button>
      </div>
   )
}

Button.propTypes = {
   color: PropTypes.string,
   isModalTrigger: PropTypes.bool,
   isSelected: PropTypes.bool,
   onclick: PropTypes.func,
   size: PropTypes.string,
   text: PropTypes.string
}

export default Button
