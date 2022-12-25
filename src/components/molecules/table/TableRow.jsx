import PropTypes from "prop-types"

function TableRow({ extraClassName, children }) {
   return <tr className={`border-b  ${extraClassName}`}>{children}</tr>
}

TableRow.defaultProps = {
   extraClassName: ""
}

TableRow.propTypes = {
   children: PropTypes.node.isRequired,
   extraClassName: PropTypes.string
}

export default TableRow
