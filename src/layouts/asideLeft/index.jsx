/* eslint-disable react/no-multi-comp */
import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

import ListItem from "../../components/molecules/listItem"

export default function Aside() {
   return (
      <aside className="bg-red-4000 hidden md:block md:w-1/12 lg:w-2/12">
         <Routes>
            <Route
               element={
                  <Suspense fallback="loading...">
                     <Menu />
                  </Suspense>
               }
               path="/learn"
            />
            <Route
               element={
                  <Suspense fallback="loading...">
                     <Menu />
                  </Suspense>
               }
               path="/practice"
            />
            <Route
               element={
                  <Suspense fallback="loading...">
                     <Menu />
                  </Suspense>
               }
               path="/learn"
            />
            <Route
               element={
                  <Suspense fallback="loading...">
                     <Menu />
                  </Suspense>
               }
               path="/article/:id"
            />
            <Route
               element={
                  <Suspense fallback="loading...">
                     <Menu />
                  </Suspense>
               }
               path="/quiz/:id"
            />
         </Routes>
      </aside>
   )
}

function Menu() {
   const location = useLocation()
   const { t } = useTranslation()
   return (
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
   )
}
