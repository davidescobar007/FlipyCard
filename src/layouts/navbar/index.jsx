/* eslint-disable react/forbid-component-props */
import React, { useContext } from "react"
import { useEffect } from "react"
import { RiMenuLine } from "react-icons/ri"
import { StoreContext } from "../../context/global.state"

function Navbar() {
   const { trigerAsideMenu, getSections } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <nav className="flex justify-between py-5 px-3">
         <a href="#">
            <h1 className="text-2xl font-semibold text-blue-900  ">
               FlipyCard
            </h1>
         </a>
         <div>
            {/* TODO: login button to be implemented once login feature is done */}
            {/* <button className="btn btn-outline-light" type="button">
                  Log In
               </button> */}
            <RiMenuLine
               className="text-gray-700"
               cursor="pointer"
               onClick={trigerAsideMenu}
               size="2em"
            />
         </div>
      </nav>
   )
}

export default Navbar
