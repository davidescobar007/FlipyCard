import PropTypes from "prop-types"

import Title from "../../atoms/title/title"

function ListItem({ children, selected, ...props }) {
   return (
      <Title
         extraClassName={`text-xl hover:bg-gray-200 cursor-pointer rounded-lg select-none my-2 p-2 font-medium flex !text-neutral ${
            selected && "border-2 border-accent bg-secondary !text-accent"
         }`}
         type="h2"
         {...props}
      >
         {children}
      </Title>
   )
}

ListItem.defaultProps = {}

ListItem.propTypes = {
   children: PropTypes.any.isRequired,
   selected: PropTypes.bool.isRequired
}

export default ListItem
