import PropTypes from "prop-types"

function TableDataCell({ children }) {
   return <td className=" border-gray-200 px-2 py-5 text-left">{children}</td>
}

TableDataCell.propTypes = {
   children: PropTypes.element.isRequired
}
export default TableDataCell
