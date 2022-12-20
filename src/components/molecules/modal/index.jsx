import Title from "../../atoms/title/title"
import PropTypes from "prop-types"

function Modal({ title, children, id }) {
   return (
      <>
         <input className="modal-open modal-toggle" id={id} type="checkbox" />
         <label
            className="modal modal-middle cursor-pointer sm:modal-middle"
            htmlFor={id}
         >
            <div className="modal-box relative" htmlFor="">
               <label
                  className="btn btn-circle btn-sm absolute right-2 top-2"
                  htmlFor={id}
               >
                  ✕
               </label>
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
   id:PropTypes.string.isRequired,
   title: PropTypes.string
}

export default Modal
