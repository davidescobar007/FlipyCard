/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/forbid-component-props */
import { RiLinkedinFill } from "react-icons/ri"

function Footer() {
   // const {
   //    setUiTheme,
   //    state: { isDarkTheme }
   // } = useContext(StoreContext)
   return (
      <footer className="footer fixed bottom-0 mt-40 w-full items-center bg-accent-focus p-4 text-neutral-content">
         <div>
            <p>Copyright © 2022 - All right reserved</p>
         </div>
         <div>
            <p className="flex text-sm">
               Made with ❤️ by
               <a href="">
                  <RiLinkedinFill
                     style={{ marginTop: "3px", marginLeft: "3px" }}
                  />
               </a>
            </p>
            {/* <input
               checked={isDarkTheme}
               className="toggle toggle-primary"
               onChange={setUiTheme}
               type="checkbox"
            /> */}
         </div>
      </footer>
   )
}

export default Footer
