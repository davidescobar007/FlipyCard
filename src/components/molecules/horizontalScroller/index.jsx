import PropTypes from "prop-types"

function HoriZontalScroller({ children }) {
   return <nav className="flex flex-nowrap overflow-x-scroll">{children}</nav>
}

HoriZontalScroller.propTypes = {
   children: PropTypes.any.isRequired
}

export default HoriZontalScroller
