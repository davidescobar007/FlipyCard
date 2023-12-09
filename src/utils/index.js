export const getRandomFromArray = (array) => {
   const random = Math.floor(Math.random() * array.length)
   return array[random]
}
export const removePunctuation = (inputString) => {
   return inputString.replace(/[.,#!$%^&*;:{}=\-_`~()?"'„“\\\r\n]/g, "")
}

export const extractAndSortSentences = (inputData) => {
   const transformedData = { data: [] }

   inputData.slice(0, 3).forEach((item) => {
      const sentences = item?.sentences
      if (sentences) {
         const firstFiveShortest = sentences
            .map((sentence) => {
               if (Array.isArray(sentence) && sentence.length >= 2) {
                  return {
                     german: sentence[0].replace(/<\/?b>/g, ""),
                     spanish: sentence[1].replace(/<\/?b>/g, "")
                  }
               }
               return null
            })
            .filter((sentence) => sentence !== null)
            .sort((a, b) => a.german.length - b.german.length)
            .slice(0, 5)

         transformedData.data = transformedData.data
            .concat(firstFiveShortest)
            .sort((a, b) => a.german.length - b.german.length)
      }
   })

   return transformedData
}

export function debounce(func, delay = 500) {
   let timeoutId

   return function (...args) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
         func.apply(this, args)
      }, delay)
   }
}

export function areObjectsDistinct(obj1, obj2) {
   const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
   for (const key of keys) {
      if (obj1[key] !== obj2[key]) {
         // TODO: uncomment following line when checking for differences between two objects
         // TODO: when committing, this must be always commented
         // console.log(`Difference in ${key}: ${obj1[key]} !== ${obj2[key]}`)
         return true
      }
   }
   return false
}

export function flattenObjects(arr) {
   return arr.map((obj) => {
      const result = {}

      function recurse(curr, path = []) {
         if (typeof curr === "object" && curr !== null) {
            for (const [key, value] of Object.entries(curr)) {
               recurse(value, path.concat(key))
            }
         } else {
            const name = path[path.length - 1]
            if (result[name] !== undefined) {
               let i = 2
               while (result[`${name}${i}`] !== undefined) {
                  i++
               }
               result[`${name}${i}`] = curr
            } else {
               result[name] = curr
            }
         }
      }

      recurse(obj)
      return result
   })
}

export function filterProperties(arr, propertiesToKeep) {
   return arr.map((obj) => {
      const newObj = {}
      propertiesToKeep.forEach((property) => {
         if (obj[property] !== undefined) {
            newObj[property] = obj[property]
         }
      })
      return newObj
   })
}

export const getPercentage = (number1, number2) => {
   if (typeof number1 !== "number" || typeof number2 !== "number" || number2 === 0) {
      return 0
   }
   if (number1 === 0) {
      return 100
   }

   const partial = (number1 / number2) * 100
   const percentage = Math.round(100 - partial)

   return Math.max(0, percentage)
}
