/* eslint-disable react/forbid-component-props */
import { useContext, useEffect } from "react"
import { FaBrain } from "react-icons/fa"
import { HiViewGridAdd } from "react-icons/hi"
import { MdLibraryAdd } from "react-icons/md"
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
            {/* <li className="my-1 rounded-md">
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <RiHomeHeartFill className="mt-1 mr-3" />
                     Home
                  </ListItem>
               </Link>
            </li> */}
            <li className="my-1 rounded-md">
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <FaBrain className="mt-1 mr-3" />
                     Practice
                  </ListItem>
               </Link>
            </li>
            <li className="my-1 rounded-lg">
               <Link to="/new-set">
                  <ListItem selected={location.pathname === "/new-set"}>
                     <MdLibraryAdd className="mt-1 mr-3" />
                     Add new set of cards
                  </ListItem>
               </Link>
            </li>
            <li className="my-1">
               <label className="text-center" htmlFor="addCategory">
                  <ListItem selected={false}>
                     <HiViewGridAdd className="mt-1 mr-3" />
                     Add categories
                  </ListItem>
               </label>
            </li>
         </ul>
      </aside>
   )
}
