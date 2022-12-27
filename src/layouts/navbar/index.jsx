/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect } from "react"
import { RiMenuLine } from "react-icons/ri"
import { Link } from "react-router-dom"

import Title from "../../components/atoms/title/title"
import { StoreContext } from "../../context/global.state"

function Navbar() {
   const { trigerAsideMenu, getSections } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <header className="navbar fixed z-10 h-14 border-b-2 bg-base-100">
         <div className="flex-1">
            <Link to="/">
               <Title
                  extraClassName="text-3xl font-mono font-extrabold text-accent"
                  type="h1"
               >
                  FlipyCard
               </Title>
            </Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
               <li>
                  <label htmlFor="my-drawer" onClick={trigerAsideMenu}>
                     <RiMenuLine size="2em" />
                  </label>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Navbar
