import React from "react"

import "./styles.scss"

function Loader() {
   return (
      <div className="animate-pulse">
         <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
   )
}

export default Loader
