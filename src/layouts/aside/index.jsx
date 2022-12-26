/* eslint-disable react/forbid-component-props */
import { useContext, useEffect } from "react"
import { HiViewGridAdd } from "react-icons/hi"
import { MdLibraryAdd } from "react-icons/md"
import { RiHomeHeartFill } from "react-icons/ri"
import { TiChevronRight } from "react-icons/ti"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Title from "../../components/atoms/title/title"
import ListItem from "../../components/molecules/listItem"
import { StoreContext } from "../../context/global.state"

export default function Aside() {
   const location = useLocation()
   const {
      getSections,
      getCategoriesBySections,
      state: { sections, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <aside className="fixed right-10 top-0 mt-20 w-2/6">
         <ul>
            <li className="my-1 rounded-md">
               <Link to="/">
                  <ListItem selected={location.pathname === "/"}>
                     <RiHomeHeartFill className="mt-1 mr-3" />
                     Home
                  </ListItem>
               </Link>
            </li>
            <li className="my-1 rounded-lg">
               <Link to="/new-set">
                  <ListItem selected={location.pathname === "/new-set"}>
                     <MdLibraryAdd className="mt-1 mr-3" />
                     Add new set of cards
                  </ListItem>
               </Link>
            </li>
            <li className="my-1">
               <ListItem selected={false}>
                  <HiViewGridAdd className="mt-1 mr-3" />
                  Add categories
               </ListItem>
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
