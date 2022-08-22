import React from "react"

const Navbar = () => {
   return (
      <nav className="navbar bg-light mb-5">
         <div className="container-fluid">
            <a className="navbar-brand">FlipyCard</a>
            <div>
               <button
                  aria-controls="collapseExample"
                  aria-expanded="false"
                  className="btn btn-primary me-3"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  type="button"
               >
                  Add new flip card
               </button>

               <button className="btn btn-outline-primary" type="button">
                  Log In
               </button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
