import CardsContainer from "../components/molecules/card"
import CategorySelector from "../components/molecules/categorySelector"

export default function Home() {
   return (
      <section className="my-3">
         <CategorySelector />
         <CardsContainer />
      </section>
   )
}
