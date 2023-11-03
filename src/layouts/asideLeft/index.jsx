/* eslint-disable react/forbid-component-props */
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import ListItem from "../../components/molecules/listItem"

export default function Aside() {
   const location = useLocation()

   return (
      <aside className="bg-red-4000 hidden md:block md:w-1/12 lg:w-2/12">
         <ul className="fixed ">
            <li>
               <Link to="/learn">
                  <ListItem selected={location.pathname === "/learn"}>
                     <span className="mb-2 text-3xl">📖</span>
                     <p className="hidden lg:block">Learn</p>
                  </ListItem>
               </Link>
            </li>
            <li className="my-4 rounded-lg">
               <Link to="/practice">
                  <ListItem selected={location.pathname === "/practice"}>
                     <span className="text-3xl">💪</span>
                     <p className="hidden lg:block">Practice</p>
                  </ListItem>
               </Link>
            </li>
         </ul>
      </aside>
   )
}
