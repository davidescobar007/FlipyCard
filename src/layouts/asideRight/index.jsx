import WordSpecification from "../../components/molecules/wordSpecification"

function AsideRight() {
   return (
      <aside className="bg-yellow-0400 hidden w-3/12 md:block lg:w-3/12">
         <div className="h-906 fixed">
            <WordSpecification />
         </div>
      </aside>
   )
}

export default AsideRight
