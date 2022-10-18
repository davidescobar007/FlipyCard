import PropTypes from "prop-types"

function TableRow({ extraClassName, children }) {
   return (
      <tr
         className={`border-b border-gray-200 hover:bg-gray-100 ${extraClassName}`}
      >
         {children}
      </tr>
   )
}
TableRow.propTypes = {
   children: PropTypes.node.isRequired,
   extraClassName: PropTypes.string
}

export default TableRow
