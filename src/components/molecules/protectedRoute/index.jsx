import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Navigate } from "react-router"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"

function ProtectedRoute({ children }) {
   const { t } = useTranslation()
   const {
      handleErrorModal,
      state: { user }
   } = useContext(StoreContext)
   if (!user) {
      handleErrorModal(t("constants.needSignUp"))
      return <Navigate to="/learn" />
   }
   return children
}

ProtectedRoute.propTypes = {
   children: PropTypes.any.isRequired
}

export default ProtectedRoute
