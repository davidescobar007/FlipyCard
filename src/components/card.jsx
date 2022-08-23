import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import PropTypes from "prop-types"

const Card = ({ section, frontReference, backReference }) => {
   const [flip, setFlip] = useState(false)

   return (
      <div className="col-11 col-md-6">
         <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
            <div className="card shadow">
               <div className="card-header">{section}</div>
               <div className="card-body text-center">
                  <p className="card-text fs-1">{frontReference}</p>
                  <button
                     className={`${
                        flip ? "btn btn-warning" : "btn btn-primary"
                     }`}
                     onClick={() => {
                        setFlip(!flip)
                     }}
                  >
                     Flip Card
                  </button>
               </div>
            </div>

            <div className="card shadow">
               <div className="card-header">{section}</div>
               <div className="card-body text-center">
                  <p className="card-text text center fs-1">{backReference}</p>
                  <button
                     className={`${
                        flip ? "btn btn-warning" : "btn btn-primary"
                     }`}
                     onClick={() => {
                        setFlip(!flip)
                     }}
                  >
                     Flip Card
                  </button>
               </div>
            </div>
         </ReactCardFlip>
      </div>
   )
}

Card.propTypes = {
   backReference: PropTypes.string,
   frontReference: PropTypes.string,
   section: PropTypes.string
}

export default Card
