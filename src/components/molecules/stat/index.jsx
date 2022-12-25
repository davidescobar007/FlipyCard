import { RxCardStackPlus } from "react-icons/rx"
import PropTypes from "prop-types"

function Stat({ NCards, section }) {
   return (
      <div className="stats shadow">
         <div className="stat">
            <div className="stat-figure text-primary">
               <RxCardStackPlus size={30} />
            </div>

            <div className="stat-title">Number of cards</div>
            <div className="stat-value text-primary">{NCards}</div>
            <div className="stat-desc">Number of cards to be added</div>
         </div>

         <div className="stat">
            <div className="stat-figure text-accent">
               <svg
                  className="inline-block h-8 w-8 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M13 10V3L4 14h7v7l9-11h-7z"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                  />
               </svg>
            </div>
            <div className="stat-title">Section</div>
            <div className="stat-value text-accent">{section}</div>
            <div className="stat-desc">
               These cards will be included in above section
            </div>
         </div>
      </div>
   )
}
Stat.defaultProps = {
   NCards: 0,
   section: ""
}

Stat.propTypes = {
   NCards: PropTypes.number,
   section: PropTypes.string
}
export default Stat
