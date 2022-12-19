import React from "react"
import PropTypes from "prop-types"

function CustomInputComponent({ itemText, ...props }) {
   return (
      <div placeholder="Enter text">
         <p
            before="Enter text"
            className="border-b border-blue-900 font-normal text-gray-500 empty:before:font-light empty:before:text-gray-400 empty:before:content-[attr(before)] focus:border-b-2 focus:border-blue-700 focus:outline-0"
            contentEditable
            name="answer"
            suppressContentEditableWarning
            {...props}
         >
            {itemText}
         </p>
      </div>
   )
}

CustomInputComponent.defaultProps = {
   itemText: ""
}

CustomInputComponent.propTypes = {
   itemText: PropTypes.string
}

export default CustomInputComponent
