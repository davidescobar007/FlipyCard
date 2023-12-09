import React from "react"

import storeReducer from "../global.reducer"
import { constants } from "../global.types"
export function useDispatchFromContext() {
   const [, dispatch] = React.useContext(storeReducer, {})
   if (dispatch === undefined) {
      throw new Error("Context must provide a dispatch function")
   }
   return dispatch
}

export const flattenObj = (input) => {
   let result = {}
   for (const key in input) {
      // eslint-disable-next-line no-prototype-builtins
      if (!input.hasOwnProperty(key)) {
         continue
      }
      if (typeof input[key] === "object" && !Array.isArray(input[key])) {
         var subFlatObject = flattenObj(input[key])
         for (const subkey in subFlatObject) {
            result[subkey] = subFlatObject[subkey]
         }
      } else {
         result[key] = input[key]
      }
   }
   return result
}

export async function delay(duration = constants.DELAY) {
   await new Promise((resolve) => {
      setTimeout(() => {
         resolve()
      }, duration)
   })
}
