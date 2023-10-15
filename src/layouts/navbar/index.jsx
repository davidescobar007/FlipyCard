/* eslint-disable react/forbid-component-props */
import React from "react"
import { Link } from "react-router-dom"

import Button from "../../components/atoms/button"
import GButton from "../../components/atoms/googleButton"
import Title from "../../components/atoms/title/title"
function Navbar() {
   return (
      <header className="navbar fixed z-10 flex h-14 border-b-2 bg-base-100 shadow-sm">
         <div className="flex-1">
            <Link to="/">
               <Title extraClassName="text-4xl flex font-mono font-extrabold text-accent" type="h1">
                  <p>Flipy</p>
                  <p className="text-accent">Card</p>
               </Title>
            </Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
               <li>
                  <Button typeOf="PRIMARY">Sign Up</Button>
                  <GButton />
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Navbar
