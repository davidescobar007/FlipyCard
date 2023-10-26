import { useContext } from "react"
import { Navigate } from "react-router"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import { constants } from "../../../context/global.types"

function ProtectedRoute({ children }) {
   const {
      handleErrorModal,
      state: { user }
   } = useContext(StoreContext)
   if (!user) {
      handleErrorModal(constants.NEED_SIGN_UP)
      return <Navigate to="/learn" />
   }
   return children
}

ProtectedRoute.propTypes = {
   children: PropTypes.any.isRequired
}

export default ProtectedRoute
