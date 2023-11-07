import PropTypes from "prop-types"
function TableAtom({ displayColumns, columns, data }) {
   return (
      <table className="table table-zebra w-full">
         {displayColumns && columns.length > 0 && (
            <thead>
               <tr>
                  {columns.map((column, index) => (
                     <th key={index}>{column}</th>
                  ))}
               </tr>
            </thead>
         )}
         <tbody>
            {data.map((item, rowIndex) => (
               <tr key={rowIndex}>
                  <td>{rowIndex + 1}</td>
                  {columns.length
                     ? columns.map((column, columnIndex) => <td key={columnIndex}>{item[column]}</td>)
                     : Object.keys(item).map((key) => <td key={key}>{String(item[key])}</td>)}
               </tr>
            ))}
         </tbody>
      </table>
   )
}

TableAtom.defaultProps = {
   columns: [],
   data: [],
   displayColumns: true
}

TableAtom.propTypes = {
   columns: PropTypes.array,
   data: PropTypes.array,
   displayColumns: PropTypes.bool
}
export default TableAtom
