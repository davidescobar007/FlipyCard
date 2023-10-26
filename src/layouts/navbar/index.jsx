/* eslint-disable react/forbid-component-props */
import React, { useEffect } from "react"
import { useContext } from "react"
import { FcGoogle } from "react-icons/fc"
import { TbLogout, TbUser } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"

import { StoreContext } from "../../context/global.state"
function Navbar() {
   const navigate = useNavigate()
   const params = new URL(window.location).searchParams
   const {
      getLoginMethods,
      googleLogin,
      logOut,
      updateUserState,
      state: { authMethods, user }
   } = useContext(StoreContext)

   useEffect(() => {
      updateUserState()
      getLoginMethods()
      if (params.get("state")) {
         googleLogin()
         navigate("/learn")
      }
   }, [])

   return (
      <header className="navbar fixed z-10 flex h-14 border-b-2 bg-base-100 shadow-sm">
         <div className="navbar bg-base-100">
            <div className="flex-1">
               <a className="btn btn-ghost text-xl normal-case">LingoDeutsch</a>
            </div>
            <div className="flex-none gap-2">
               {user != null ? (
                  <div className="dropdown dropdown-end">
                     <label className="avatar btn btn-circle btn-ghost" tabIndex={0}>
                        <div className="w-10 rounded-full">
                           <img src={user.avatarUrl} />
                        </div>
                     </label>
                     <ul
                        className="menu-sm  dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
                        tabIndex={0}
                     >
                        <li>
                           <Link className="justify-between" to="/profile">
                              Profile
                              <span className="text-lg">
                                 <TbUser />
                              </span>
                           </Link>
                        </li>
                        <li>
                           <Link className="justify-between" onClick={() => logOut()} to="/learn">
                              Log out
                              <span className="text-lg">
                                 <TbLogout />
                              </span>
                           </Link>
                        </li>
                     </ul>
                  </div>
               ) : (
                  <div>
                     {authMethods.map((provider) => (
                        <a
                           className="btn btn-primary"
                           href={`${provider.authUrl}http://localhost:5173/learn`}
                           key={provider.authUrl}
                           role="button"
                        >
                           <span className="mr-1 text-xl">
                              <FcGoogle />
                           </span>
                           Log in with Google
                        </a>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </header>
   )
}

export default Navbar
