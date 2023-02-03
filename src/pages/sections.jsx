import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import Title from "../components/atoms/title/title"
import Stat from "../components/molecules/stat"
import { StoreContext } from "../context/global.state"
import { emojiList } from "../context/global.types"

export default function Home() {
   const {
      getSections,
      getCategoriesBySections,
      state: { sections, selectedSection, categories }
   } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])

   return (
      <main className="">
         <div className="flex w-full flex-col border-opacity-50">
            <div className="card rounded-box grid h-20 place-items-center">
               <label className="" htmlFor="addSection">
                  <div className="!hover:bg-secondary hover:scale-105">
                     <Stat
                        emoji="⚡"
                        extraClassName="bg-secondary cursor-pointer"
                        text="Click me to add a new section"
                        title="Add Section"
                     />
                  </div>
               </label>
            </div>
            <div className="divider">
               <Title extraClassName="font-bold" type="h2">
                  My Sections
               </Title>
            </div>
            <div className="card rounded-box place-items-center">
               {sections.map((item, index) => (
                  <Link key={item.id} to="/">
                     <Stat
                        emoji={emojiList[index]}
                        extraClassName={
                           item.id === selectedSection?.id
                              ? "bg-secondary hover:bg-secondary my-2"
                              : "my-2"
                        }
                        handleClick={() => getCategoriesBySections(item)}
                        text={
                           item.id === selectedSection?.id
                              ? `${categories.length} categories`
                              : " Start with me"
                        }
                        title={item.section}
                     />
                  </Link>
               ))}
            </div>
         </div>
      </main>
   )
}
