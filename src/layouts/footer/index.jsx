import { Link, useLocation } from "react-router-dom"

const selectedItem = "border-2 rounded-xl p-1 border-accent bg-secondary hover:bg-secondary"
function Footer() {
   const location = useLocation()
   return (
      <footer className="md:hidden">
         <div className="btm-nav">
            <Link to="/learn">
               <span className={`${location.pathname === "/learn" && selectedItem} text-3xl`}>📖</span>
            </Link>
            <Link to="/practice">
               <span className={`${location.pathname === "/practice" && selectedItem} text-3xl`}>💪</span>
            </Link>
            {/* <label className="text-center" htmlFor="addCategory">
               <span className="text-3xl">🏆</span>
            </label> */}
            <Link to="/sections">
               <span className="text-3xl">🏆</span>
            </Link>
         </div>
      </footer>
   )
}

export default Footer
