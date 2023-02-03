import { useContext, useEffect } from "react"

import Stat from "../../components/molecules/stat"
import { StoreContext } from "../../context/global.state"
import { emojiList } from "../../context/global.types"
function SectionSelector() {
   const {
      getSections,
      getCategoriesBySections,
      state: { sections, selectedSection, categories }
   } = useContext(StoreContext)

   useEffect(() => {
      console.log(sections)
      getSections()
   }, [])
   return (
      <aside className="bg-yellow-4000 hidden w-3/12 select-none md:block lg:w-3/12">
         <div className="fixed right-5 h-96 2xl:right-32">
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

            <div className="mt-3 flex h-80 flex-col overflow-x-hidden overflow-y-scroll">
               {sections.map((item, index) => (
                  <Stat
                     emoji={emojiList[index]}
                     extraClassName={
                        item.id === selectedSection?.id
                           ? "bg-secondary hover:bg-secondary my-2"
                           : "my-2"
                     }
                     handleClick={() => getCategoriesBySections(item)}
                     key={item.id}
                     text={
                        item.id === selectedSection?.id
                           ? `${categories.length} categories`
                           : " Start with me"
                     }
                     title={item.section}
                  />
               ))}
            </div>
         </div>
      </aside>
   )
}

export default SectionSelector
