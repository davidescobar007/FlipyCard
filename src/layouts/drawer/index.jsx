import React, { useContext } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../context/global.state"
import Aside from "../aside"

function Drawer({ children }) {
   const {
      state: { isMenuOpen, isDarkTheme }
   } = useContext(StoreContext)

   return (
      <div
         className="bg-base-100"
         data-theme={!isDarkTheme ? "mytheme" : "night"}
      >
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
