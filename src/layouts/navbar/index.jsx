/* eslint-disable react/forbid-component-props */
import React, { useContext } from "react"
import { useEffect } from "react"
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
      <header className="navbar bg-base-100 border-b-2 fixed mb-4 z-10">
         <div className="flex-1">
            <Link to="/">
               <Title
                  extraClassName="text-3xl font-mono font-semibold text-accent"
                  type="h1"
               >
                  FlipyCard
               </Title>
            </Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
               <li>
                  <label className="" htmlFor="my-drawer">
                     <RiMenuLine onClick={trigerAsideMenu} size="2em" />
                  </label>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Navbar
