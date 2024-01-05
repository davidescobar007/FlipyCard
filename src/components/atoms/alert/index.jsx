import React from "react"
import PropTypes from "prop-types"

function AlertAtom({ children }) {
   return (
      <div className="alert p-2 italic" role="alert">
         <svg
            className="h-6 w-6 shrink-0 stroke-info"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
            />
         </svg>
         <span className="text-sm">{children}</span>
      </div>
   )
}

AlertAtom.propTypes = {
   children: PropTypes.any.isRequired
}

export default AlertAtom
