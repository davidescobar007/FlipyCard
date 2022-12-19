/* eslint-disable react/forbid-component-props */
import { useContext } from "react"
import { StoreContext } from "../../../context/global.state"
import { RiDeleteBin3Fill, RiEdit2Line } from "react-icons/ri"

function CardHeader({ ...rest }) {
   const { deleteCurrentCard } = useContext(StoreContext)

   return (
      <header className="flex justify-between">
         <div {...rest} className="cursor-pointer">
            <RiEdit2Line className="text-xl text-gray-700" />
         </div>
         <div className="cursor-pointer" onClick={deleteCurrentCard}>
            <RiDeleteBin3Fill className="text-xl text-gray-700" />
         </div>
      </header>
   )
}

export default CardHeader
