import PropTypes from "prop-types"

function Stat({ extraClassName, handleClick, emoji, title, text }) {
   return (
      <div
         className={`stat w-56 rounded-2xl border-2 border-accent p-1 hover:bg-gray-200  ${extraClassName}`}
         onClick={() => handleClick()}
      >
         <div className="stat-figure text-xl text-primary">{emoji}</div>
         <div className="stat-value text-xl text-primary">{title}</div>
         <div className="stat-desc font-semibold text-gray-700">{text}</div>
      </div>
   )
}
Stat.defaultProps = {
   emoji: "",
   extraClassName: "",
   handleClick: () => {}
}

Stat.propTypes = {
   emoji: PropTypes.string,
   extraClassName: PropTypes.string,
   handleClick: PropTypes.any,
   text: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired
}
export default Stat