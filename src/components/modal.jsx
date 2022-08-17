import React, { useContext } from "react";
import { AppContext } from "../context";
import { setDocument, updateDocument } from "../services";

const Modal = () => {
  const { categories, setCategories, categoryId, setcategoryId } =
    useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.elements.categoryNameModal.value;
    const categoryList = [value, ...categories];
    !categories.includes(value) && setCategories(categoryList);
    // await setDocument("categories", {
    //   categoriesMerged,
    //   userId: "",
    // });
    await updateDocument("categories", categoryId, { categoryList });
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Create new category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="categoryNameModal" className="form-label">
                  Category name
                </label>
                <input
                  type="text"
                  name="categoryNameModal"
                  className="form-control"
                  id="categoryNameModal"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Create category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
