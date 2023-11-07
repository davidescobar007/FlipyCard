import { useContext, useEffect } from "react"

import { StoreContext } from "../../../context/global.state"
import Title from "../../atoms/title/title"
function Score() {
   const {
      getScoreList,
      state: { scoreList, user }
   } = useContext(StoreContext)

   useEffect(() => {
      getScoreList()
   }, [])
   const scoreMedals = {
      1: "🥇",
      2: "🥈",
      3: "🥉"
   }
   return (
      <>
         <Title extraClassName="font-medium text-xl my-3">
            Tabla de puntos <span className="text-3xl">🏆</span>
         </Title>
         <ul className="w-full">
            {scoreList.map(({ username, score, position }, index) => (
               <li className="mb-4" key={username + position}>
                  <div
                     className={`stat rounded-xl border-2 border-secondary shadow-md ${
                        user?.username === username ? "bg-secondary" : "bg-white"
                     }`}
                  >
                     <div className="stat-figure text-3xl text-secondary">{scoreMedals[index + 1] || "⚡"}</div>
                     <div className="stat-title">
                        <span className="font-bold">{position}</span> - {username}
                     </div>
                     <div className="stat-value text-lg">{score} puntos</div>
                  </div>
               </li>
            ))}
         </ul>
      </>
   )
}

export default Score
