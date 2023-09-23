import WordSpecification from "../../components/molecules/wordSpecification"

function AsideRight() {
   return (
      <aside className="bg-yellow-0400 hidden w-3/12 md:block lg:w-3/12">
         <div className="fixed h-96">
            <WordSpecification />
         </div>
      </aside>
   )
}

export default AsideRight
