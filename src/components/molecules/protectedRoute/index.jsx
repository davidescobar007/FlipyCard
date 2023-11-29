import { useTranslation } from "react-i18next"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

import { handleErrorModal } from "../../../context/actions/global.actions"

function ProtectedRoute({ children }) {
   const { t } = useTranslation()
   const { model } = JSON.parse(localStorage.getItem("pocketbase_auth"))
   const handleRedirect = () => {
      console.log(model)
      handleErrorModal(t("constants.needSignUp"))
      return <Navigate to="/learn" />
   }
   if (!model?.username) {
      handleRedirect()
      return
   }
   return children
}

ProtectedRoute.propTypes = {
   children: PropTypes.any.isRequired
}

export default ProtectedRoute
