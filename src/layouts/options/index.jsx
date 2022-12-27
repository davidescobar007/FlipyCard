import { useContext, useEffect } from "react"
import { TiChevronLeft, TiChevronRight } from "react-icons/ti"

import HoriZontalScroller from "../../components/molecules/horizontalScroller"
import { StoreContext } from "../../context/global.state"
function Option() {
   const {
      getSections,
      getCategoriesBySections,
      state: { sections, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getSections()
   }, [])
   return (
      <div className="fixed z-10 mt-16 flex w-full cursor-pointer select-none border-b-2 bg-base-100 py-1">
         <div className="mx-10 flex">
            <div className="flex items-center">
               <TiChevronLeft />
            </div>

            <label className="text-center" htmlFor="addSection">
               <div className="mr-3 mt-2 hover:scale-105">
                  <div className="stat mx-2 rounded-xl border-2 border-accent p-1 hover:bg-secondary">
                     <div className="stat-figure text-2xl text-accent">⚡</div>
                     <div className="stat-value text-xl text-accent">
                        Add Section
                     </div>
                     <div className="stat-desc font-semibold text-gray-700">
                        Add a new section
                     </div>
                  </div>
               </div>
            </label>

            <HoriZontalScroller>
               {sections.map((item, index) => (
                  <div
                     className="mr-3 mt-2"
                     key={index}
                     onClick={() => getCategoriesBySections(item)}
                  >
                     <div
                        className={`stat mx-2 rounded-xl border-2 border-accent p-1 hover:bg-gray-200  ${
                           item === selectedSection &&
                           "bg-secondary hover:bg-secondary "
                        }`}
                        onClick={() => getCategoriesBySections(item)}
                     >
                        <div className="stat-figure text-xl text-primary">
                           🥰
                        </div>
                        <div className="stat-value text-xl text-primary">
                           {item}
                        </div>
                        <div className="stat-desc font-semibold text-gray-700">
                           <b>6</b> categories and <b>56</b> cards
                        </div>
                     </div>
                  </div>
               ))}
            </HoriZontalScroller>
            <div className="flex items-center">
               <TiChevronRight />
            </div>
         </div>
      </div>
   )
}

export default Option
