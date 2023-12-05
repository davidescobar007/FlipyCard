/* eslint-disable react/forbid-component-props */
import { useEffect } from "react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { TbLanguage, TbLogout, TbUser } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"

import Title from "../../components/atoms/title/title"
import { StoreContext } from "../../context/global.state"
function Navbar() {
   const { t, i18n } = useTranslation()
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
      <header className="border-b-1 navbar fixed z-10 flex h-14 border-neutral bg-base-100 shadow-md">
         <div className="flex-1">
            <div className="w-16 select-none">
               <Link to="/">
                  <img alt="heart with german flag colors" src="/logo.png" />
               </Link>
            </div>
            <Link to="/">
               <Title extraClassName="hidden md:block select-none text-xl font-bold flex content-center" type="h1">
                  LingoDeutsch
               </Title>
            </Link>
         </div>
         <div className="flex-none gap-2">
            <div className="dropdown dropdown-end dropdown-bottom">
               <label className="btn btn-ghost m-1 " tabIndex={0}>
                  <span className=" text-2xl">
                     <TbLanguage />
                  </span>
                  <span className="text-xl">
                     <MdOutlineKeyboardArrowDown className="text-gray-600" />
                  </span>
               </label>
               <ul
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
                  tabIndex={0}
               >
                  <li>
                     <div className="my-1 justify-between py-3 text-lg" onClick={() => i18n.changeLanguage("de")}>
                        {t("menu.germanOption")}
                        <span className="text-lg">
                           <img
                              alt="German flag"
                              loading="lazy"
                              src="https://flagsapi.com/DE/flat/64.png"
                              width="25"
                           />
                        </span>
                     </div>
                  </li>
                  <li>
                     <div className="my-1 justify-between py-3 text-lg" onClick={() => i18n.changeLanguage("es")}>
                        {t("menu.spanishOption")}
                        <span className="text-lg">
                           <img
                              alt="Spain flag"
                              loading="lazy"
                              src="https://flagsapi.com/ES/flat/64.png"
                              width="25"
                           />
                        </span>
                     </div>
                  </li>
               </ul>
            </div>
            {user != null ? (
               <div className="dropdown-end dropdown">
                  <label className="avatar btn btn-circle btn-ghost" tabIndex={0}>
                     <div className="w-10 rounded-full">
                        <img src={user?.avatarUrl} />
                     </div>
                  </label>
                  <ul
                     className="menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
                     tabIndex={0}
                  >
                     <li>
                        <Link className="my-1 justify-between py-3 text-lg" to="/profile">
                           {t("menu.profile")}
                           <span className="text-lg">
                              <TbUser />
                           </span>
                        </Link>
                     </li>
                     <li>
                        <Link className="my-1 justify-between py-3 text-lg" onClick={() => logOut()} to="/learn">
                           {t("menu.logOut")}
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
                        className="btn btn-outline btn-primary"
                        href={`${provider.authUrl + import.meta.env.VITE_ENVIRONMENT}/learn`}
                        key={provider.authUrl}
                        role="button"
                     >
                        <span className="mr-1 text-xl">
                           <FcGoogle />
                        </span>
                        <span className="block font-bold md:hidden">{t("menu.logIn")}</span>
                        <span className="hidden font-bold md:block">{t("menu.loginWithGoogle")}</span>
                     </a>
                  ))}
               </div>
            )}
         </div>
      </header>
   )
}

export default Navbar
