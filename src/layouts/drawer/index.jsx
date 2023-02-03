import { useContext } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../context/global.state"

function Drawer({ children }) {
   const {
      state: { isDarkTheme }
   } = useContext(StoreContext)

   return (
      <section
         className="mt-24 flex justify-between bg-base-100 px-5 2xl:px-32"
         data-theme={isDarkTheme ? "night" : "mytheme"}
      >
         {children}
      </section>
   )
}

Drawer.propTypes = {
   children: PropTypes.any.isRequired
}

export default Drawer
