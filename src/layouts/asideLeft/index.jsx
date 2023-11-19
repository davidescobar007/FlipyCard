/* eslint-disable react/forbid-component-props */
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import ListItem from "../../components/molecules/listItem"

export default function Aside() {
   const location = useLocation()
   const { t } = useTranslation()
   return (
      <aside className="bg-red-4000 hidden md:block md:w-1/12 lg:w-2/12">
         <ul className="fixed ">
            <li>
               <Link to="/learn">
                  <ListItem selected={location.pathname === "/learn"}>
                     <span className="mb-2 text-3xl">📖</span>
                     <p className="hidden lg:block">{t("menu.learn")}</p>
                  </ListItem>
               </Link>
            </li>
            <li className="my-4 rounded-lg">
               <Link to="/practice">
                  <ListItem selected={location.pathname === "/practice"}>
                     <span className="text-3xl">💪</span>
                     <p className="hidden lg:block">{t("menu.practice")}</p>
                  </ListItem>
               </Link>
            </li>
         </ul>
      </aside>
   )
}
