import { RiCloseFill } from "react-icons/ri"
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"
import { Link } from "react-router-dom"
import Title from "../../components/title/title"

export default function Aside() {
   const {
      trigerAsideMenu,
      getSections,
      getCategoriesBySections,
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
      <aside className="fixed z-10 flex min-h-screen w-full bg-white text-lg text-gray-700">
         <div className="fixed right-0 my-4 mx-2" onClick={handleClick}>
            <RiCloseFill cursor="pointer" size="2em" />
         </div>
         <div className="h-screen w-full flex-shrink-0 p-3 py-5">
            <ul>
               <li>
                  <Link onClick={trigerAsideMenu} to="/">
                     <Title extraClassName="text-xl font-medium" type="h2">
                        Home
                     </Title>
                  </Link>
               </li>
               <li>
                  <Title extraClassName="text-xl font-medium" type="h2">
                     &#9656; My Sections
                  </Title>
               </li>
               {sections.map((item, index) => (
                  <li key={index} onClick={() => getCategoriesBySections(item)}>
                     <p
                        className={`m-1 cursor-pointer rounded-md pl-2 text-lg hover:bg-slate-300 ${
                           item === selectedSection && "rounded-md bg-slate-300"
                        }`}
                        onClick={trigerAsideMenu}
                     >
                        {item}
                     </p>
                  </li>
               ))}
               <li>
                  <Link onClick={trigerAsideMenu} to="/new-set">
                     <Title extraClassName="text-xl font-medium" type="h2">
                        Add new set of cards +
                     </Title>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>
   )
}
