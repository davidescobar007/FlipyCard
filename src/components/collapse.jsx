import React, {useContext} from "react";
import FormSubmit from "./formSubmit";


const Collapse = () => {
  return (
    <section className="mb-3">
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <FormSubmit></FormSubmit>
        </div>
      </div>
    </section>
  );
};

export default Collapse;
