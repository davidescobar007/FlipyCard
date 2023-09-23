import { headers, urls } from "../context/global.types"

import { fetchData } from "."

export const getWordsTranslationFetchImplementation = async (
   wordToTranslate
) => {
   const urlCompletion = `${urls.linguatools}query=${wordToTranslate}&langpair=de-es`
   try {
      const translationData = await fetchData(
         "GET",
         urlCompletion,
         null,
         headers
      )
      console.log(translationData)
      return translationData
   } catch (error) {
      return error
   }
}
