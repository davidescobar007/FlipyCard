import { useContext, useEffect } from "react"

import { StoreContext } from "../../../context/global.state"

function Score() {
   const { getScoreList } = useContext(StoreContext)

   useEffect(() => {
      getScoreList()
      setInterval(() => {
         console.log("siu")
      }, 1000)
   }, [])

   return (
      <div className="overflow-x-auto">
         <table className="table table-zebra w-full">
            <tbody>
               <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>450</td>
               </tr>
               <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>894</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default Score
