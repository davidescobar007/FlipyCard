import PropTypes from "prop-types"

function Input({ type = "text", ...rest }) {
   return (
      <input
         type={type}
         {...rest}
         className="w-full appearance-none border-b border-blue-900 bg-transparent p-2 leading-tight shadow-sm focus:bg-transparent focus:outline-none"
      />
   )
}

Input.propTypes = {
   type: PropTypes.string
}

export default Input
