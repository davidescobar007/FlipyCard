/* eslint-disable react/forbid-component-props */
import { useContext, useEffect } from "react"
import { HiViewGridAdd } from "react-icons/hi"
import { RiHeartAddFill, RiHomeHeartFill } from "react-icons/ri"
import { TiChevronRight } from "react-icons/ti"
import { Link } from "react-router-dom"

import Title from "../../components/atoms/title/title"
import { StoreContext } from "../../context/global.state"

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
      <aside className="fixed right-10 top-0 mt-20 w-2/6">
         <ul className="menu text-base-content">
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
                     <div className="collapse-title p-0">
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
                                       "rounded-md bg-primary font-semibold text-base-100"
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
