import Navbar from "./components/navbar"
import Collapse from "./components/collapse"
import CategorySelector from "./components/categorySelector"
import CardsContainer from "./components/cardsContainer"
import StoreProvider from "./context/global.state"
import Modal from "./components/modal"

function App() {
   return (
      <StoreProvider>
         <div className="App">
            <Navbar />
            <main className="container">
               <CategorySelector />
               <Collapse />
               <CardsContainer />
               <Modal />
            </main>
         </div>
      </StoreProvider>
   )
}

export default App
