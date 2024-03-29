import { useTranslation } from "react-i18next"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

import { handleErrorModal } from "../../../context/actions/global.actions"

function ProtectedRoute({ children }) {
   const { t } = useTranslation()
   const user = JSON.parse(localStorage.getItem("pocketbase_auth"))
   if (user?.model?.id) {
      return children
   } else {
      handleErrorModal(t("constants.needSignUp"))
      return <Navigate to="/learn" />
   }
}

ProtectedRoute.propTypes = {
   children: PropTypes.any.isRequired
}

export default ProtectedRoute
