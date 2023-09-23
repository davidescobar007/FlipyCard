import PropTypes from "prop-types"

export default function Title({ children, type, extraClassName }) {
   const cssClass = `font-bold text-2xl ${extraClassName}`

   const title = {
      h1: <h1 className={cssClass}>{children}</h1>,
      h2: <h2 className={cssClass}>{children}</h2>,
      h3: <h3 className={cssClass}>{children}</h3>,
      h4: <h4 className={cssClass}>{children}</h4>,
      h5: <h5 className={cssClass}>{children}</h5>
   }
   return title[type]
}

Title.defaultProps = {
   extraClassName: "",
   type: "h2"
}

Title.propTypes = {
   children: PropTypes.any.isRequired,
   extraClassName: PropTypes.string,
   type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"])
}
