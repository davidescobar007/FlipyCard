import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import { RiDeleteBin3Fill, RiEdit2Line } from "react-icons/ri"
import { StoreContext } from "../context/global.state"
import CardFlipper from "../features/flipCard"

const Card = ({ frontReference, backReference }) => {
   const [flip, setFlip] = useState(false)
   const [displayForm, setDisplayForm] = useState(false)
   const [formData, setFormData] = useState(null)
   const {
      state: { randomCard },
      updateCard,
      deleteCurrentCard
   } = useContext(StoreContext)

   const handleChange = (e) => {
      e.preventDefault()
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   const setCurrentCard = (e) => {
      e.preventDefault()
      setDisplayForm(false)
      updateCard({ ...randomCard, ...formData })
   }

   const cardHeader = () => (
      <div
         className="card-header row justify-content-between"
         style={{ margin: "0" }}
      >
         <div
            className="col-1"
            onClick={() => setDisplayForm(true)}
            style={{ cursor: "pointer" }}
         >
            <RiEdit2Line />
         </div>
         <div
            className="col-1"
            onClick={deleteCurrentCard}
            style={{ cursor: "pointer" }}
         >
            <RiDeleteBin3Fill />
         </div>
      </div>
   )

   const cardForm = (isFrontReference, inputValue) => {
      return (
         <form
            className="row row-cols-lg-auto g-3 justify-content-md-center"
            onSubmit={setCurrentCard}
         >
            <div className="row g-3">
               <div className="col-12">
                  <input
                     className="form-control"
                     defaultValue={inputValue}
                     id="inputAddress"
                     name={
                        isFrontReference ? "frontReference" : "backReference"
                     }
                     onChange={handleChange}
                     type="text"
                  />
               </div>
               <div className="col-12">
                  <button
                     className="m-3 btn btn-outline-primary"
                     onClick={() => setDisplayForm(false)}
                     type="button"
                  >
                     Cancel
                  </button>
                  <button className="m-3 btn btn-primary" type="submit">
                     Save
                  </button>
               </div>
            </div>
         </form>
      )
   }

   return (
      <div className="col-11 col-md-6">
         <CardFlipper flipDirection="horizontal" isFlipped={flip}>
            <div className="card shadow">
               {cardHeader()}
               <div
                  className="card-body text-center"
                  style={{ cursor: "pointer" }}
               >
                  {displayForm ? (
                     cardForm(true, frontReference)
                  ) : (
                     <div onClick={() => setFlip(!flip)}>
                        <p className="card-text fs-1">{frontReference}</p>
                     </div>
                  )}
               </div>
            </div>

            <div className="card shadow">
               {cardHeader()}
               <div
                  className="card-body text-center"
                  style={{ cursor: "pointer" }}
               >
                  {displayForm ? (
                     cardForm(false, backReference)
                  ) : (
                     <div onClick={() => setFlip(!flip)}>
                        <p className="card-text fs-1">{backReference}</p>
                     </div>
                  )}
               </div>
            </div>
         </CardFlipper>
      </div>
   )
}

Card.propTypes = {
   backReference: PropTypes.string,
   frontReference: PropTypes.string
}

export default Card
