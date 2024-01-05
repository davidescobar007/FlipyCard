import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { QuizzLoader } from "../../components/atoms/loader"
import QuizQuestion from "../../components/Organisms/quizQuestion"
import { StoreContext } from "../../context/global.state"

export default function Quiz() {
   const {
      getSingleQuizz,
      state: {
         quizz,
         isLoading: { quizz: isLoadingQuizz }
      }
   } = useContext(StoreContext)

   const { id } = useParams()

   useEffect(() => {
      getSingleQuizz(id)
   }, [])

   return (
      <section>
         {isLoadingQuizz ? (
            <QuizzLoader />
         ) : (
            quizz?.questions && <QuizQuestion arrayOfQuestions={quizz?.questions} />
         )}
      </section>
   )
}
