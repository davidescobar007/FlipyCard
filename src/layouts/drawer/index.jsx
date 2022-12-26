import { useContext } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../context/global.state"

function Drawer({ children }) {
   const {
      state: { isDarkTheme }
   } = useContext(StoreContext)

   return (
      <section
         className="flex h-screen flex-col"
         data-theme={isDarkTheme ? "night" : "mytheme"}
      >
         <div className="bg-base-100">{children}</div>
      </section>
   )
}

Drawer.propTypes = {
   children: PropTypes.any.isRequired
}

export default Drawer
