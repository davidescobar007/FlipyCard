/* eslint-disable react/forbid-component-props */
import { RiDeleteBin3Fill, RiEdit2Line } from "react-icons/ri"

function CardHeader({ ...rest }) {
   return (
      <header className="flex justify-between">
         <div
            {...rest}
            className="cursor-pointer rounded-lg border-2 border-accent bg-secondary p-1"
         >
            <RiEdit2Line className="text-accent" size={25} />
         </div>
         <div className="cursor-pointer rounded-lg border-2 border-error  bg-warning p-1">
            <label htmlFor="deleteCard">
               <RiDeleteBin3Fill className="text-error" size={25} />
            </label>
         </div>
      </header>
   )
}

export default CardHeader
