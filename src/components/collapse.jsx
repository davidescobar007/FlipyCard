import React from "react"
import FormSubmit from "./formSubmit"

function Collapse() {
   return (
      <section className="rounded-5 mb-5">
         <div className="collapse" id="collapseExample">
            <div className="card card-body" id="collapse-card">
               <FormSubmit />
            </div>
         </div>
      </section>
   )
}

export default Collapse
