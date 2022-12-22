import React from "react"
import Aside from "../aside"
import PropTypes from "prop-types"
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"

function Drawer({ children }) {
   const {
      state: { isMenuOpen, isDarkTheme }
   } = useContext(StoreContext)
   return (
      <div className="" data-theme={!isDarkTheme ? "mytheme" : "lemonade"}>
         <div className="drawer">
            <input
               checked={isMenuOpen}
               className="drawer-toggle"
               id="my-drawer"
               readOnly
               type="checkbox"
            />
            <div className="drawer-content flex h-screen flex-col">
               {children}
            </div>
            <Aside />
         </div>
      </div>
   )
}

Drawer.propTypes = {
   children: PropTypes.any.isRequired
}

export default Drawer
