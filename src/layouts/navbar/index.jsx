/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import Button from "../../components/atoms/button"
import Title from "../../components/atoms/title/title"
import { StoreContext } from "../../context/global.state"

function Navbar() {
   const { getSections } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <header className="navbar fixed z-10 flex h-14 border-b-2 bg-base-100 shadow-sm">
         <div className="flex-1">
            <Link to="/">
               <Title
                  extraClassName="text-3xl flex font-mono font-extrabold text-accent"
                  type="h1"
               >
                  <p>Flipy</p>
                  <p className="text-accent">Card</p>
               </Title>
            </Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
               <li>
                  <Button typeOf="PRIMARY">Sign Up</Button>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Navbar
