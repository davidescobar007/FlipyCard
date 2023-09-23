import Stat from "../../components/molecules/stat"
function SectionSelector() {
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

            <div className="mt-3 flex h-80 flex-col overflow-x-hidden overflow-y-scroll" />
         </div>
      </aside>
   )
}

export default SectionSelector
