import { useContext } from "react"

export function useDispatchFromContext(context) {
   const dispatch = useContext(context)
   if (dispatch === undefined) {
      throw new Error("Context must provide a dispatch function")
   }
   return dispatch
}
