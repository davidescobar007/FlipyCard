import PropTypes from "prop-types"

export default function Badge({ children, type }) {
   return <div className={`badge badge-${type} ml-2`}>{children}</div>
}
Badge.defaultProps = { type: "primary" }

Badge.propTypes = {
   children: PropTypes.any.isRequired,
   type: PropTypes.string
}
