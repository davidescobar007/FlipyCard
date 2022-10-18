import React from "react"
import PropTypes from "prop-types"

function CustomInputComponent({ itemText, reference, ...props }) {
   return (
      <div placeholder="Enter text">
         <p
            before="Enter text"
            className="border-b border-blue-900 font-normal text-gray-500 empty:before:font-light empty:before:text-gray-400 empty:before:content-[attr(before)] focus:border-b-2 focus:border-orange-600 focus:outline-0"
            contentEditable
            name="answer"
            ref={reference}
            suppressContentEditableWarning
            {...props}
         >
            {itemText}
         </p>
      </div>
   )
}

CustomInputComponent.propTypes = {
   itemText: PropTypes.string,
   reference: PropTypes.any
}

export default CustomInputComponent
