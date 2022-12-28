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
      <aside className="fixed right-10 top-0 mt-36 w-2/6">
         <ul className=" mt-5">
            <li className="my-1">
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <span className="text-3xl">🎮</span>
                     Practice
                  </ListItem>
               </Link>
            </li>
            <li className="my-1 rounded-lg">
               <Link to="/new-set">
                  <ListItem selected={location.pathname === "/new-set"}>
                     <span className="text-3xl">🗂️</span>
                     Add new set of cards
                  </ListItem>
               </Link>
            </li>
            <li className="my-1">
               <label className="text-center" htmlFor="addCategory">
                  <ListItem selected={false}>
                     <span className="text-3xl">🏷️</span>
                     Add categories
                  </ListItem>
               </label>
            </li>
         </ul>
      </aside>
   )
}
