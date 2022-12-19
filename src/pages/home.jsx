import CardsContainer from "../components/molecules/card"
import CategorySelector from "../components/molecules/categorySelector/categorySelector"

export default function Home() {
   return (
      <section>
         <CategorySelector />
         <CardsContainer />
      </section>
   )
}
