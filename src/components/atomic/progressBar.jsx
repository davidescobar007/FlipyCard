import React from "react"
import PropTypes from "prop-types"
import ProgressBar from "@ramonak/react-progress-bar"

export default function ProgressPercentage({ value }) {
   return (
      <section className="col-12 text-center mb-5">
         <ProgressBar
            animateOnRender
            baseBgColor="transparent"
            bgColor="#f8c537"
            completed={value}
            labelColor="transparent"
         />
      </section>
   )
}

ProgressPercentage.propTypes = {
   value: PropTypes.number
}
