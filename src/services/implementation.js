import { headers, urls } from "../context/global.types"
import { transformData } from "../utils"

import { fetchData } from "."

export const getWordsTranslationFetchImplementation = async (wordToTranslate) => {
   const urlCompletion = `${urls.linguatools}query=${wordToTranslate}&langpair=de-es`
   try {
      if (wordToTranslate !== "" || wordToTranslate !== " ") {
         const translationData = await fetchData("GET", urlCompletion, null, headers)
         let result = await translationData.text()
         result = result ? JSON.parse(result) : null
         const data = {
            german_translation: result && result[0].l1_text,
            spanish_translation: result && result[0].l2_text,
            english_translation: null,
            user: null,
            type_of_word: result && result[0].wortart,
            examples: result && result[0]?.sentences && transformData(result[0].sentences)
         }

         const transformedResult = {
            data: result ? data : null,
            status: translationData.status
         }
         return transformedResult
      }
   } catch (error) {
      console.log(error)
      return error
   }
}
