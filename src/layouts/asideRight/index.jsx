import WordSpecification from "../../components/molecules/wordSpecification"

function AsideRight() {
   return (
      <aside className="bg-yellow-4000  hidden sm:w-4/12 md:block md:w-3/12 ">
         <div className="fixed">
            <WordSpecification />
         </div>
      </aside>
   )
}

export default AsideRight
