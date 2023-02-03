import React from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import PropTypes from "prop-types"

export default function ProgressPercentage({ value }) {
   return (
      <section className="col-12 mb-5 text-center">
         <ProgressBar
            animateOnRender
            baseBgColor="transparent"
            bgColor="#58cc02"
            completed={value}
            labelColor="transparent"
            transitionDuration="0.4s"
         />
      </section>
   )
}

ProgressPercentage.propTypes = {
   value: PropTypes.number.isRequired
}
