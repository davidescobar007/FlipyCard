/* eslint-disable react/forbid-component-props */
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"
import { RiDeleteBin3Fill, RiEdit2Line } from "react-icons/ri"

function CardHeader({ ...rest }) {
   const { deleteCurrentCard } = useContext(StoreContext)

   return (
      <header className="flex justify-between" style={{ margin: "0" }}>
         <div {...rest} style={{ cursor: "pointer" }}>
            <RiEdit2Line className="text-gray-700" />
         </div>
         <div onClick={deleteCurrentCard} style={{ cursor: "pointer" }}>
            <RiDeleteBin3Fill className="text-gray-700" />
         </div>
      </header>
   )
}

export default CardHeader
