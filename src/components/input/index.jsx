import PropTypes from "prop-types"

function Input({ type, extraClassName, ...rest }) {
   return (
      <input
         type={type}
         {...rest}
         className={`w-full appearance-none border-b border-blue-900 bg-transparent p-2 leading-tight shadow-sm focus:bg-transparent focus:outline-none ${extraClassName}`}
      />
   )
}

Input.defaultProps = {
   extraClassName: "",
   type: "text"
}

Input.propTypes = {
   extraClassName: PropTypes.string,
   type: PropTypes.string
}

export default Input
