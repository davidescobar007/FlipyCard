/* eslint-disable unused-imports/no-unused-vars */
import { useCallback, useContext, useState } from "react"
import { LoginSocialGoogle } from "reactjs-social-login"

import { StoreContext } from "../../../context/global.state"
export default function GButton() {
   const { _googleLoginSuccess } = useContext(StoreContext)
   const [provider, setProvider] = useState("")
   const [profile, setProfile] = useState()

   const onLoginStart = useCallback((data) => {
      alert(data)
   }, [])

   const _onLogoutSuccess = useCallback(() => {
      setProfile(null)
      setProvider("")
      alert("logout success")
   }, [])

   const _onLogout = useCallback(() => {}, [])

   return (
      <LoginSocialGoogle
         access_type="offline"
         client_id={import.meta.env.VITE_REACT_APP_GG_APP_ID || ""}
         discoveryDocs="claims_supported"
         // onLoginStart={(data) => console.log(data)}
         onReject={(err) => {
            console.log(err)
         }}
         onResolve={({ provider, data }) => {
            console.log({ provider, data })
            setProvider(provider)
            setProfile(data)
         }}
         scope="openid profile email"
      >
         <button>Login with Google</button>
      </LoginSocialGoogle>
   )
}
