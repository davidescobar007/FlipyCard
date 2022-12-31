import PropTypes from "prop-types"

import Title from "../../atoms/title/title"

function Modal({ title, children, id, onCheckboxChange }) {
   return (
      <>
         <input
            className="modal-open modal-toggle"
            id={id}
            onChange={onCheckboxChange}
            type="checkbox"
         />
         <label
            className="modal modal-middle cursor-pointer sm:modal-middle"
            htmlFor={id}
         >
            <div className="modal-box relative" htmlFor="">
               <label
                  className="btn btn-circle btn-sm absolute right-2 top-2 border-2 border-primary bg-transparent font-bold text-primary"
                  htmlFor={id}
               >
                  X
               </label>
               <Title extraClassName="text-2xl font-semibold mb-3" type="h3">
                  {title}
               </Title>
               {children}
            </div>
         </label>
      </>
   )
}

Modal.defaultProps = {
   onCheckboxChange: () => {},
   title: ""
}

Modal.propTypes = {
   children: PropTypes.any.isRequired,
   id: PropTypes.string.isRequired,
   onCheckboxChange: PropTypes.any,
   title: PropTypes.string
}

export default Modal
