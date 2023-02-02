import { Link, useLocation } from "react-router-dom"

const selectedItem =
   "border-2 rounded-lg p-1 border-accent bg-secondary hover:bg-secondary"
function Footer() {
   const location = useLocation()
   return (
      <footer className=" md:hidden">
         <div className="btm-nav">
            <Link to="/">
               <span
                  className={`${
                     location.pathname === "/" && selectedItem
                  } text-3xl`}
               >
                  🎮
               </span>
            </Link>
            <Link to="/new-set">
               <span
                  className={`${
                     location.pathname === "/new-set" && selectedItem
                  } text-3xl`}
               >
                  🗂️
               </span>
            </Link>
            <label className="text-center" htmlFor="addCategory">
               <span className="text-3xl">🏷️</span>
            </label>
            <Link to="/sections">
               <span className="text-3xl">⚡</span>
            </Link>
         </div>
      </footer>
   )
}

export default Footer
