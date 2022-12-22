import PropTypes from "prop-types"

export default function TextArea({ extraClassName, innerRef, ...rest }) {
   const inputEvent = () => {
      //TODO: set auto height as number of textlenght in value - no rezising when a lot text is deleted
      const scrollHeight = innerRef.current.scrollHeight
      innerRef.current.style.height = scrollHeight + "px"
   }
   return (
      <textarea
         className={
            "h-auto w-full  border-blue-900  p-1 leading-tight shadow-md focus:bg-secondary focus:outline-accent " +
            extraClassName
         }
         onInput={inputEvent}
         ref={innerRef}
         {...rest}
         //  value="hello world"
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
