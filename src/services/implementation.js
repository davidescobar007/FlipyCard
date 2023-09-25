import { headers, urls } from "../context/global.types"

import { fetchData } from "."

export const getWordsTranslationFetchImplementation = async (
   wordToTranslate
) => {
   const urlCompletion = `${urls.linguatools}query=${wordToTranslate}&langpair=de-es`
   try {
      if (wordToTranslate !== "" || wordToTranslate !== " ") {
         const translationData = await fetchData(
            "GET",
            urlCompletion,
            null,
            headers
         )
         return translationData
      }
   } catch (error) {
      console.log(error)
      return error
   }
}
