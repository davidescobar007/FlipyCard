import Title from "../../atoms/title/title"
import PropTypes from "prop-types"

function Modal({ title, children }) {

   return (
      <>
         <input
            className="modal-open modal-toggle"
            id="my-modal-4"
            type="checkbox"
         />
         <label
            className="modal modal-middle cursor-pointer sm:modal-middle"
            htmlFor="my-modal-4"
         >
            <div className="modal-box relative" htmlFor="">
               <Title extraClassName="text-2xl font-semibold" type="h3">
                  {title}
               </Title>
               {children}
            </div>
         </label>
      </>
   )
}

Modal.defaultProps = {
   title: ""
}

Modal.propTypes = {
   children: PropTypes.any.isRequired,
   title: PropTypes.string
}

export default Modal
