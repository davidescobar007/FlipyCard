import React, { useContext } from "react"
import { RiMenuLine } from "react-icons/ri"
import { StoreContext } from "../../context/global.state"

function Navbar() {
   const { trigerAsideMenu } = useContext(StoreContext)

   return (
      <nav className="navbar mb-5">
         <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
               FlipyCard
            </a>
            <div>
               {/* TODO: login button to be implemented once login feature is done */}
               {/* <button className="btn btn-outline-light" type="button">
                  Log In
               </button> */}
               <RiMenuLine
                  cursor="pointer"
                  onClick={trigerAsideMenu}
                  size="2em"
               />
            </div>
         </div>
      </nav>
   )
}

export default Navbar
