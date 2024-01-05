import PropTypes from "prop-types"

function BadgeListMolecule({ itemsArray, selectedItem, ...rest }) {
   return (
      <div className="mb-5 flex flex-nowrap">
         <div className="flex justify-around overflow-x-auto pb-2 pt-3">
            {Array.isArray(itemsArray) &&
               itemsArray.map(({ label, value }, index) => {
                  return (
                     <div
                        className={`badge ${
                           selectedItem === value && "badge-primary "
                        } badge-md mr-3 cursor-pointer select-none`}
                        key={index}
                        {...rest}
                        data-value={value}
                     >
                        {label}
                     </div>
                  )
               })}
         </div>
      </div>
   )
}

BadgeListMolecule.propTypes = {
   itemsArray: PropTypes.array.isRequired,
   selectedItem: PropTypes.string
}

export default BadgeListMolecule
