import PropTypes from "prop-types"

function CardBody({ reference, ...rest }) {
   return (
      <div className="cursor-pointer py-4" {...rest}>
         <div className="my-4 cursor-pointer">
            <p className="text-2xl font-medium text-neutral">{reference}</p>
         </div>
      </div>
   )
}

CardBody.defaultProps = {
   reference: ""
}

CardBody.propTypes = {
   reference: PropTypes.string
}

export default CardBody
