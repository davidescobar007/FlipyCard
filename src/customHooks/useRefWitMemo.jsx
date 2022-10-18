import { useMemo, useRef } from "react"

export default function useRefWitMemo(array) {
   const reference = useRef()
   const childRefs = useMemo(() => array.map(() => reference), [array.length])
   return {
      childRefs
   }
}
