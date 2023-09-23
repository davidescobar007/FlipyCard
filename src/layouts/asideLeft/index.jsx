/* eslint-disable react/forbid-component-props */
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import ListItem from "../../components/molecules/listItem"

export default function Aside() {
   const location = useLocation()

   return (
      <aside className="hidden bg-red-400 md:block md:w-1/12 lg:w-2/12">
         <ul className="fixed ">
            <li>
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <span className="mb-2 text-3xl">📖</span>
                     <p className="hidden lg:block">Learn</p>
                  </ListItem>
               </Link>
            </li>
            <li className="my-4 rounded-lg">
               <Link to="/practice">
                  <ListItem selected={location.pathname === "/practice"}>
                     <span className="text-3xl">🤓</span>
                     <p className="hidden lg:block">Practice</p>
                  </ListItem>
               </Link>
            </li>
         </ul>
      </aside>
   )
}
