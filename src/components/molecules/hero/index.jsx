import { useContext, useEffect } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import Title from "../../atoms/title/title"
import WordSpecification from "../wordSpecification"
export default function Hero({ image, title, text_content, level = [] }) {
   const { setSelectedWord, resetTranslation } = useContext(StoreContext)
   useEffect(() => {
      return () => {
         resetTranslation()
      }
   }, [])

   return (
      <div className="flex justify-between">
         <div className="hero bg-base-100">
            <div className="hero-content text-center">
               <div className="max-w-md">
                  <img className="mask mask-squircle mb-3" src={image} />
                  <Title>{title}</Title>
                  {level.map((item) => (
                     <div className="badge badge-primary mr-2" key={item}>
                        {item}
                     </div>
                  ))}
                  <p className="mb-24 cursor-pointer py-6 text-justify text-lg">
                     {text_content.split(" ").map((word, index) => (
                        <span
                           className=" pb-1 pl-1 duration-300 hover:rounded-lg hover:bg-accent hover:ease-in-out"
                           key={`${word}${index}`}
                           onClick={() => setSelectedWord(word)}
                        >
                           {`${word} `}
                        </span>
                     ))}
                  </p>
               </div>
            </div>
         </div>
         <WordSpecification />
      </div>
   )
}

Hero.defaultProps = {}

Hero.propTypes = {
   image: PropTypes.string.isRequired,
   level: PropTypes.array.isRequired,
   text_content: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired
}
