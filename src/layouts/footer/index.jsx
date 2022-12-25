/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/forbid-component-props */
import { useContext } from "react"
import { RiLinkedinFill } from "react-icons/ri"

import { StoreContext } from "../../context/global.state"

function Footer() {
   const {
      setUiTheme,
      state: { isDarkTheme }
   } = useContext(StoreContext)
   return (
      <footer className="footer mt-40 items-center bg-accent-focus p-4 text-neutral-content">
         <div>
            <p>Copyright © 2022 - All right reserved</p>
            <p className="flex">
               Made with ❤️ by
               <a href="">
                  <RiLinkedinFill
                     style={{ marginTop: "3px", marginLeft: "3px" }}
                  />
               </a>
            </p>
         </div>
         <div>
            <input
               checked={isDarkTheme}
               className="toggle toggle-primary"
               onChange={setUiTheme}
               type="checkbox"
            />
         </div>
      </footer>
   )
}

export default Footer
