import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import QuizQuestion from "../../components/Organisms/quizQuestion"
import { StoreContext } from "../../context/global.state"

export default function Quiz() {
   const {
      getSingleQuizz,
      state: { quizz }
   } = useContext(StoreContext)

   const { id } = useParams()

   useEffect(() => {
      getSingleQuizz(id)
   }, [])

   return <section>{quizz?.questions && <QuizQuestion arrayOfQuestions={quizz?.questions} />}</section>
}
