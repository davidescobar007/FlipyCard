import CardsContainer from "../components/card"
import CategorySelector from "../components/categorySelector"

export default function Home() {
   return (
      <section>
         <CategorySelector />
         <CardsContainer />
      </section>
   )
}
