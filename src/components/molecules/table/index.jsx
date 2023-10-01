import PropTypes from "prop-types"

export default function Table({ tableHeadProps, children }) {
   return (
      <table className="w-full">
         <thead>
            <tr className=" text-lg text-neutral">
               {Array.isArray(tableHeadProps) &&
                  tableHeadProps.map((item) => (
                     <th className="py-3 text-center" key={item}>
                        {item}
                     </th>
                  ))}
            </tr>
         </thead>
         <tbody className="text-base font-light text-gray-600">{children}</tbody>
      </table>
   )
}

Table.propTypes = {
   children: PropTypes.element.isRequired,
   tableHeadProps: PropTypes.arrayOf(PropTypes.string).isRequired
}
