import "./aside.scss"
import { RiCloseFill } from "react-icons/ri"
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"

export default function Aside() {
   const {
      trigerAsideMenu,
      state: { isMenuOpen }
   } = useContext(StoreContext)

   const handleClick = () => {
      trigerAsideMenu()
   }

   if (!isMenuOpen) {
      return
   }
   return (
      <aside className="menuAside shadow">
         <div
            onClick={handleClick}
            style={{ right: "0", margin: "15px", position: "fixed" }}
         >
            <RiCloseFill cursor="pointer" size="2em" />
         </div>
         <div
            className="flex-shrink-0 p-5"
            style={{ width: "100%", height: "100%" }}
         >
            <ul className="list-unstyled">
               {/* TODO: add new card button to be implemented once the add card feature has a better and clear implementatio */}
               {/* <li>
                  <button
                     aria-controls="collapseExample"
                     aria-expanded="false"
                     className="btn btn-light me-3"
                     data-bs-target="#collapseExample"
                     data-bs-toggle="collapse"
                     type="button"
                  >
                     Add new card
                  </button>
               </li> */}
               <li>
                  <h2>My Categories</h2>
               </li>
               <li>German</li>
               <li>English</li>
            </ul>
         </div>
      </aside>
   )
}
