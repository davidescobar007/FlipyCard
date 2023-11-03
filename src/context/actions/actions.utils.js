import React from "react"

import storeReducer from "../global.reducer"
export function useDispatchFromContext() {
   const [, dispatch] = React.useContext(storeReducer, {})
   if (dispatch === undefined) {
      throw new Error("Context must provide a dispatch function")
   }
   return dispatch
}
