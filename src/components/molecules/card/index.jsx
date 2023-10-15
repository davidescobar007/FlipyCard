import PropTypes from "prop-types"

import Title from "../../atoms/title/title"
export default function Card({ image, title, content, level = [], ...rest }) {
   return (
      <article className="card card-side mb-8 cursor-pointer bg-white shadow-lg" {...rest}>
         <figure>
            <div className="avatar">
               <div className="w-52 rounded">
                  <img src={image} />
               </div>
            </div>
         </figure>
         <div className="card-body p-4">
            <article className="prose">
               <Title extraClassName="card-title mb-1">{title}</Title>
               {level.map((item) => (
                  <div className="badge badge-primary mr-2" key={item}>
                     {item}
                  </div>
               ))}
               <p className="mt-1 line-clamp-1">{content}</p>
            </article>
         </div>
      </article>
   )
}

Card.defaultProps = {}

Card.propTypes = {
   content: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   level: PropTypes.array.isRequired,
   title: PropTypes.string.isRequired
}
