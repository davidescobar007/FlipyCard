import Navbar from "./components/navbar"
import Collapse from "./components/collapse"
import Modal from "./components/modal"
import AppContextProvider from "./context"
import CategorySelector from "./components/categorySelector"
import CardsContainer from "./components/cardsContainer"

function App() {
   return (
      <AppContextProvider>
         <div className="App">
            <Navbar />
            <main className="container">
               <Collapse />
               <CategorySelector />
               <CardsContainer />
               <Modal />
            </main>
         </div>
      </AppContextProvider>
   )
}

export default App
