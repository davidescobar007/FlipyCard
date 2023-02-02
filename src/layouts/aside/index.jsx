/* eslint-disable react/forbid-component-props */
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import ListItem from "../../components/molecules/listItem"
import { StoreContext } from "../../context/global.state"

export default function Aside() {
   const location = useLocation()
   const { getSections } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <aside className="bg-red-4000 hidden md:block md:w-1/12 lg:w-2/12">
         <ul className="fixed ">
            <li>
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <span className="text-3xl">🎮</span>
                     <p className="hidden lg:block">Practice</p>
                  </ListItem>
               </Link>
            </li>
            <li className="my-4 rounded-lg">
               <Link to="/new-set">
                  <ListItem selected={location.pathname === "/new-set"}>
                     <span className="text-3xl">🗂️</span>
                     <p className="hidden lg:block">Add new cards</p>
                  </ListItem>
               </Link>
            </li>
            <li>
               <label className="text-center" htmlFor="addCategory">
                  <ListItem selected={false}>
                     <span className="text-3xl">🏷️</span>
                     <p className="hidden lg:block">Add categories</p>
                  </ListItem>
               </label>
            </li>
         </ul>
      </aside>
   )
}
