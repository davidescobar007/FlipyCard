import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import CategorySelector from "./categorySelector";
import { setDocument } from "../services";

const FormSubmit = () => {
  const [formData, setFormData] = useState(null);
  const { categorySelected } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categorySelected) {
      return alert("Please select a category");
    }
    await setDocument("cards", {
      ...formData,
      ...{ category: categorySelected, timesSeen: 0, userId: "" },
    });
    const collapseElementList = document.querySelectorAll(".collapse");
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new bootstrap.Collapse(collapseEl)
    );
    setFormData({ ...formData, frontReference: "", backReference: "" });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="row g-3 mb-5">
        <CategorySelector />
        <div className="col-12 col-md-6">
          <label htmlFor="frontReference" className="form-label">
            Front reference
          </label>
          <input
            type="text"
            className="form-control"
            id="frontReference"
            placeholder="Type your reference"
            value={formData?.frontReference ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, frontReference: e.target.value })
            }
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="backReference" className="form-label">
            Back reference (the answer)
          </label>
          <input
            type="text"
            className="form-control"
            id="backReference"
            placeholder="Type the back reference for the card"
            value={formData?.backReference ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, backReference: e.target.value })
            }
          />
        </div>

        <div className="d-grid col-6 mx-auto">
          <button className="btn btn-outline-primary">Create card</button>
        </div>
      </form>
    </div>
  );
};

export default FormSubmit;
