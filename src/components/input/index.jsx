import PropTypes from "prop-types"

function Input({ type, ...rest }) {
   return (
      <input
         type={type}
         {...rest}
         className="w-full appearance-none border-b border-blue-900 bg-transparent p-2 leading-tight shadow-sm focus:bg-transparent focus:outline-none"
      />
   )
}

Input.defaultProps = {
   type: "text"
}

Input.propTypes = {
   type: PropTypes.string
}

export default Input
