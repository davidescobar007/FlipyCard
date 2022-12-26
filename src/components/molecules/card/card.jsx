/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import { constants } from "../../../context/global.types"
import CardFlipper from "../../../features/flipCard"
import Button from "../../atoms/button"
import Input from "../../atoms/input"
import Modal from "../modal"

import CardBody from "./cardBody"
import CardHeader from "./cardHeader"

function Card({ frontReference, backReference, isFirstCard }) {
   const [animation, setAnimation] = useState("")
   const [flip, setFlip] = useState(false)
   const [displayForm, setDisplayForm] = useState(false)
   const [formData, setFormData] = useState(null)
   const {
      deleteCurrentCard,
      state: { randomCard },
      updateCard
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

   useEffect(() => {
      if (isFirstCard) {
         setAnimation("animation_entrance")
      } else {
         setAnimation("animation_entrance_exit")
      }
      setTimeout(() => {
         setAnimation("")
      }, 620)
   }, [frontReference])

   useEffect(() => {
      // var msg = new SpeechSynthesisUtterance()
      // var voices = window.speechSynthesis.getVoices()
      // msg.voice = voices[10]
      // msg.volume = 1 // From 0 to 1
      // msg.rate = 1 // From 0.1 to 10
      // msg.pitch = 2 // From 0 to 2
      // msg.text = "Como estas Joel"
      // msg.lang = "es"
      // speechSynthesis.speak(msg)
   }, [])

   const cardForm = (isFrontReference, inputValue) => {
      return (
         <form
            className="g-3 justify-content-md-center my-5"
            onSubmit={setCurrentCard}
         >
            <div className="row g-3">
               <div className="col-12">
                  <Input
                     defaultValue={inputValue}
                     name={
                        isFrontReference
                           ? constants.FRONT_TERM
                           : constants.ANSWER
                     }
                     onChange={handleChange}
                  />
               </div>
               <div className="my-3 flex justify-around">
                  <Button onClick={() => setDisplayForm(false)}>Cancel</Button>
                  <Button
                     onClick={() => setDisplayForm(true)}
                     type="submit"
                     typeOf="SECONDARY"
                  >
                     Save
                  </Button>
               </div>
            </div>
         </form>
      )
   }

   return (
      <div className={` ${animation}`}>
         <Modal id="deleteCard" title="Please comfirm.">
            You are about to delete this card. Do you comfirm this action?
            <div className="modal-action">
               <label
                  className="btn border-error bg-warning text-error shadow-md hover:bg-warning"
                  htmlFor="deleteCard"
                  onClick={() => {
                     deleteCurrentCard()
                  }}
               >
                  Delete
               </label>
            </div>
         </Modal>
         <CardFlipper flipDirection="horizontal" isFlipped={flip}>
            <div className="rounded-xl bg-white p-3 shadow-xl">
               <CardHeader onClick={() => setDisplayForm(true)} />
               <div className="card-body text-center">
                  {displayForm ? (
                     cardForm(true, frontReference)
                  ) : (
                     <CardBody
                        onClick={() => setFlip(!flip)}
                        reference={frontReference}
                     />
                  )}
               </div>
            </div>

            <div className="rounded-xl bg-white p-3 shadow-xl">
               <CardHeader onClick={() => setDisplayForm(true)} />
               <div className="card-body text-center">
                  {displayForm ? (
                     cardForm(false, backReference)
                  ) : (
                     <CardBody
                        onClick={() => setFlip(!flip)}
                        reference={backReference}
                     />
                  )}
               </div>
            </div>
         </CardFlipper>
      </div>
   )
}

Card.defaultProps = {
   backReference: "",
   frontReference: "",
   isFirstCard: null
}

Card.propTypes = {
   backReference: PropTypes.string,
   frontReference: PropTypes.string,
   isFirstCard: PropTypes.bool
}

export default Card
