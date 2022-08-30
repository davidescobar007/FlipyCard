import React from "react"

const Navbar = () => {
   return (
      <nav className="navbar mb-5">
         <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
               FlipyCard
            </a>
            <div>
               <button
                  aria-controls="collapseExample"
                  aria-expanded="false"
                  className="btn btn-warning me-3"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  type="button"
               >
                  Add new flip card
               </button>

               <button className="btn btn-outline-light" type="button">
                  Log In
               </button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
