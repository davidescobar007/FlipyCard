import PropTypes from "prop-types"
export default function InputCheckGroup({ text, name, inputState, ...rest }) {
   const inputStyles = {
      selected: "border-4 border-accent bg-secondary",
      success: "border-4 border-primary bg-secondary",
      error: "border-4 border-error bg-secondary"
   }

   const inputEmoji = {
      success: "✅",
      error: "🚫"
   }

   const emojiStyles = {
      success: "animate__heartBeat",
      error: "animate__shakeX"
   }

   return (
      <div className={`form-control my-4 rounded-xl p-2 ${inputStyles[inputState]}`}>
         <label className="label relative cursor-pointer justify-start">
            <input className="radio-accent radio mr-4" name={name} type="radio" {...rest} />
            <span className="label-text text-lg font-normal">{text}</span>
            <span
               className={`animate__animated ${emojiStyles[inputState]} absolute right-0 top-0 -mr-5 -mt-6 text-2xl`}
            >
               {inputEmoji[inputState]}
            </span>
         </label>
      </div>
   )
}

InputCheckGroup.defaultProps = {}

InputCheckGroup.propTypes = {
   inputState: PropTypes.oneOf(["selected", "success", "error", ""]).isRequired,
   name: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}
