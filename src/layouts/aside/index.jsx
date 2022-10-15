import { RiCloseFill } from "react-icons/ri"
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"

export default function Aside() {
   const {
      trigerAsideMenu,
      getSections,
      setSection,
      state: { isMenuOpen, sections, selectedSection }
   } = useContext(StoreContext)

   const handleClick = () => {
      trigerAsideMenu()
      getSections()
   }

   if (!isMenuOpen) {
      return
   }
   return (
      <aside className="z-0 flex h-screen w-full bg-white text-lg text-gray-700">
         <div className="fixed right-0 my-4 mx-2" onClick={handleClick}>
            <RiCloseFill cursor="pointer" size="2em" />
         </div>
         <div className="h-screen w-full flex-shrink-0 p-3 py-5">
            <ul>
               <li>
                  <h2 className="text-2xl font-medium">My Sections</h2>
               </li>
               {sections.map((item, index) => (
                  <li key={index} onClick={() => setSection(item)}>
                     <p
                        className={`mx-2 my-3 cursor-pointer text-lg ${
                           item === selectedSection &&
                           "text-orange-700 underline "
                        }`}
                        onClick={trigerAsideMenu}
                     >
                        {item}
                     </p>
                  </li>
               ))}
               <li>
                  <h2 className="cursor-pointer text-xl font-medium">
                     Add new set of cards
                  </h2>
               </li>
            </ul>
         </div>
      </aside>
   )
}
