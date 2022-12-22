/* eslint-disable react/forbid-component-props */
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"
import { Link } from "react-router-dom"
import Title from "../../components/atoms/title/title"
import { RiHomeHeartFill, RiHeartAddFill } from "react-icons/ri"
import { TiChevronRight } from "react-icons/ti"
import { useEffect } from "react"
import { HiViewGridAdd } from "react-icons/hi"

export default function Aside() {
   const {
      trigerAsideMenu,
      getSections,
      getCategoriesBySections,
      state: { sections, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <aside className="drawer-side">
         <label
            className="drawer-overlay"
            htmlFor="my-drawer"
            onClick={trigerAsideMenu}
         />
         <ul className="menu w-full bg-base-100 p-4 text-base-content lg:w-3/6">
            <li>
               <Link onClick={trigerAsideMenu} to="/">
                  <Title extraClassName="text-2xl font-medium flex" type="h2">
                     <RiHomeHeartFill className="mt-1 mr-3" />
                     Home
                  </Title>
               </Link>
            </li>
            <li>
               <Link onClick={trigerAsideMenu} to="/new-set">
                  <Title extraClassName="text-2xl font-medium flex" type="h2">
                     <RiHeartAddFill className="mt-1 mr-3" />
                     Add new set of cards
                  </Title>
               </Link>
            </li>
            <li>
               <div>
                  <div className="collapse">
                     <input type="checkbox" />
                     <div className="focus:mi collapse-title p-0">
                        <Title
                           extraClassName="text-2xl flex font-medium"
                           type="h2"
                        >
                           <TiChevronRight className="mt-1 mr-3" />
                           My Sections
                        </Title>
                     </div>
                     <div className="collapse-content">
                        <ul>
                           <li>
                              <Title
                                 extraClassName="text-xl flex font-medium"
                                 type="h3"
                              >
                                 Add new section
                                 <HiViewGridAdd className="mt-1 mr-3" />
                              </Title>
                           </li>
                           {sections.map((item, index) => (
                              <li
                                 key={index}
                                 onClick={() => getCategoriesBySections(item)}
                              >
                                 <p
                                    className={`hover:bg-secundary m-1 cursor-pointer rounded-md pl-8 text-lg ${
                                       item === selectedSection &&
                                       "rounded-md bg-primary font-semibold text-neutral text-base-100"
                                    }`}
                                    onClick={trigerAsideMenu}
                                 >
                                    {item}
                                 </p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </aside>
   )
}
