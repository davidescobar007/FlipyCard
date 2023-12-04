import PropTypes from "prop-types"

function PictureAtom({ image }) {
   return (
      <picture>
         {/* webP */}
         <source media="(max-width: 640px)" srcSet={`"${image}?width=200 200w"`} type="image/webp" />
         <source media="(max-width: 768px)" srcSet={`"${image}?width=400 400w"`} type="image/webp" />
         <source media="(max-width: 1024px)" srcSet={`"${image}?width=900 900w"`} type="image/webp" />

         {/* avif */}
         <source media="(max-width: 640px)" srcSet={`"${image}?width=200 200w"`} type="image/avif" />
         <source media="(max-width: 768px)" srcSet={`"${image}?width=400 400w"`} type="image/avif" />
         <source media="(max-width: 1024px)" srcSet={`"${image}?width=900 900w"`} type="image/avif" />

         <img
            alt={image}
            decoding="async"
            height={50}
            loading="lazy"
            sizes="(max-width: 500px) 100vw, 50vw"
            src={image}
            srcSet={`"${image}?width=100 100w, ${image}?width=200 200w, ${image}?width=400 400w, ${image}?width=500 500w"`}
         />
      </picture>
   )
}

PictureAtom.propTypes = { image: PropTypes.string.isRequired }

export default PictureAtom
