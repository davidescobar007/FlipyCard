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

export function flattenObjects(arrayOfObjects) {
   /**
    * Flattens an array of objects by converting nested properties into top-level properties.
    *
    * @param {Array} arrayOfObjects - An array of objects with nested properties.
    * @returns {Array} - An array of objects where nested properties are flattened into top-level properties.
    */
   return arrayOfObjects.map((object) => {
      const flattenedObject = {}

      function flatten(current, path = []) {
         if (Array.isArray(current)) {
            flattenedObject[path.join(".")] = current
         } else if (typeof current === "object" && current !== null) {
            for (const [key, value] of Object.entries(current)) {
               flatten(value, path.concat(key))
            }
         } else {
            const propertyName = path[path.length - 1]
            if (flattenedObject[propertyName] !== undefined) {
               let index = 2
               while (flattenedObject[`${propertyName}${index}`] !== undefined) {
                  index++
               }
               flattenedObject[`${propertyName}${index}`] = current
            } else {
               flattenedObject[propertyName] = current
            }
         }
      }

      flatten(object)
      return flattenedObject
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
