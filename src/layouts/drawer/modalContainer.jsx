import { useContext } from "react"
import PropTypes from "prop-types"

import Modal from "../../components/molecules/modal"
import { StoreContext } from "../../context/global.state"
function ModalContainer({ children }) {
   const {
      state: { isDarkTheme }
   } = useContext(StoreContext)

   return (
      <section className="flex h-screen flex-col overflow-auto" data-theme={isDarkTheme ? "night" : "mytheme"}>
         {children}
         <Modal id="modalWarning" title="Ooops!">
            <p className="py-4 text-lg" id="modalTextContent" />
            <div className="modal-action">
               <label className="btn btn-warning" htmlFor="modalWarning">
                  Close
               </label>
            </div>
         </Modal>
      </section>
   )
}

ModalContainer.propTypes = {
   children: PropTypes.any.isRequired
}

export default ModalContainer
