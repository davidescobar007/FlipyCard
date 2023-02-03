import PropTypes from "prop-types"

function HoriZontalScroller({ children }) {
   return <nav className=" flex flex-nowrap bg-red-500">{children}</nav>
}

HoriZontalScroller.propTypes = {
   children: PropTypes.any.isRequired
}

export default HoriZontalScroller
