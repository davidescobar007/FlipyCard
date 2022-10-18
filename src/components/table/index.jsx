import PropTypes from "prop-types"
export default function Table({ tableHeadProps, children }) {
   return (
      <table className="w-full min-w-max table-fixed shadow-lg ">
         <thead>
            <tr className="bg-orange-300 text-base leading-normal text-gray-600">
               {Array.isArray(tableHeadProps) &&
                  tableHeadProps.map((item) => (
                     <th className="py-3 px-6 text-left" key={item}>
                        {item}
                     </th>
                  ))}
            </tr>
         </thead>
         <tbody className="text-base font-light text-gray-600">
            {children}
         </tbody>
      </table>
   )
}

Table.propTypes = {
   children: PropTypes.element.isRequired,
   tableHeadProps: PropTypes.arrayOf(PropTypes.string).isRequired
}