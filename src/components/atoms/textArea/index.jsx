import PropTypes from "prop-types"

export default function TextArea({ extraClassName, innerRef, ...rest }) {
   return (
      <textarea
         className={
            "h-auto w-full rounded-md border-blue-900 p-1  font-semibold leading-tight shadow-md focus:outline-accent " +
            extraClassName
         }
         ref={innerRef}
         {...rest}
      />
   )
}

TextArea.defaultProps = {
   extraClassName: "",
   innerRef: null
}

TextArea.propTypes = {
   extraClassName: PropTypes.string,
   innerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}
