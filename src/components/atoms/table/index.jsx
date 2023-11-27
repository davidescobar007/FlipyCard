import { useTranslation } from "react-i18next"
import { HiTrash } from "react-icons/hi"
import PropTypes from "prop-types"

import Title from "../title/title"
function TableAtom({ displayHeader, columns, data, displayIndex, extraClassname, isDelete, title }) {
   const { t } = useTranslation()
   return (
      <>
         {title && (
            <Title extraClassName="text-lg mb-4 font-semibold underline underline-offset-4" type="h3">
               {title}
            </Title>
         )}
         <table className={`table table-zebra w-full ${extraClassname}`}>
            {displayHeader && columns.length > 0 && (
               <thead>
                  <tr>
                     {columns.map((column, index) => (
                        <th className="text-sm" key={index}>
                           {t(`data.${column}`)}
                        </th>
                     ))}
                     {isDelete && <th>Actions</th>}
                  </tr>
               </thead>
            )}
            <tbody>
               {data.map((item, rowIndex) => (
                  <tr className="hover" key={rowIndex}>
                     {displayIndex && <td>{rowIndex + 1}</td>}
                     {columns.length
                        ? columns.map((column, columnIndex) => <td key={columnIndex}>{item[column]}</td>)
                        : Object.keys(item).map((key) => <td key={key}>{String(item[key])}</td>)}
                     {isDelete && (
                        <td>
                           <span className="cursor-pointer text-lg text-red-600">
                              <HiTrash />
                           </span>
                        </td>
                     )}
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}

TableAtom.defaultProps = {
   columns: [],
   data: [],
   displayHeader: true,
   displayIndex: false,
   extraClassname: "",
   isDelete: false,
   title: null
}

TableAtom.propTypes = {
   columns: PropTypes.array,
   data: PropTypes.array,
   displayHeader: PropTypes.bool,
   displayIndex: PropTypes.bool,
   extraClassname: PropTypes.string,
   isDelete: PropTypes.bool,
   title: PropTypes.string
}
export default TableAtom
