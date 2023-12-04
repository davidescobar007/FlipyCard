/* eslint-disable react/no-multi-comp */
import "./styles.scss"

export function Loader() {
   return (
      <div className="animate-pulse">
         <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
   )
}

export function CardLoader() {
   return (
      <div className="flex h-44 select-none flex-col gap-5 rounded-2xl bg-white p-2 shadow-lg sm:flex-row sm:p-4 ">
         <div className="h-full w-52 animate-pulse rounded-xl bg-gray-400" />
         <div className="flex flex-1 flex-col gap-5 sm:p-2">
            <div className="flex flex-1 flex-col gap-3">
               <div className="h-8 w-full animate-pulse rounded-2xl bg-gray-200" />
               <div className="h-4 w-20 animate-pulse rounded-full bg-gray-200" />
               <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
               <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
            </div>
         </div>
      </div>
   )
}
