import PropTypes from "prop-types"

function InputAtom({ type, extraClassName, inputId, withLabel, labelText, ...rest }) {
   return (
      <div className="my-3">
         {withLabel && (
            <label className="label" htmlFor={inputId}>
               <span className="label-text font-semibold">{labelText}</span>
            </label>
         )}
         <input
            className={"max-w-xs input input-bordered w-full " + extraClassName}
            id={inputId}
            name={inputId}
            type={type}
            {...rest}
         />
      </div>
   )
}

InputAtom.defaultProps = {
   extraClassName: "",
   inputId: "",
   labelText: "",
   type: null,
   withLabel: false
}

InputAtom.propTypes = {
   extraClassName: PropTypes.string,
   inputId: PropTypes.string || PropTypes.any,
   labelText: PropTypes.string,
   type: PropTypes.string,
   withLabel: PropTypes.bool
}

export default InputAtom
