import PropTypes from "prop-types"

function FlipCard({ extraClassName, message, ...rest }) {
   return (
      <div
         className={`${extraClassName} card w-full border-2 border-accent bg-secondary text-neutral-content shadow-md`}
         {...rest}
      >
         <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-600">{message}</h2>
         </div>
      </div>
   )
}

FlipCard.defaultProps = {
   extraClassName: ""
}

FlipCard.propTypes = {
   extraClassName: PropTypes.string,
   message: PropTypes.string.isRequired
}

export default FlipCard
