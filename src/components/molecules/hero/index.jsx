import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import Badge from "../../atoms/badge"
import Button from "../../atoms/button"
import Title from "../../atoms/title/title"
import ImageCard from "../imageCard"
export default function Hero({ image, title, text_content, level = [] }) {
   const { setSelectedWord, resetTranslation } = useContext(StoreContext)
   const [currentWordIntext, setCurrentWordIntext] = useState(null)
   let { id } = useParams()
   useEffect(() => {
      return () => {
         resetTranslation()
      }
   }, [])

   const xsStyles = "fixed inset-x-0 h-[calc(100vh-45vh)] pb-24 top-60 overflow-scroll px-5"
   const smStyles = "mx-auto mt-1 sm:h-[calc(100vh-40vh)] sm:pb-0"
   const mdStyles = "md:top-0 md:pb-5 md:relative md:h-min md:overflow-auto"

   return (
      <div className="hero bg-base-100">
         <div className="hero-content p-0 text-center">
            <div className="max-w-md">
               <div className="hidden md:block">
                  <img className="rounded-lg" height={50} src={image} />
                  <Title extraClassName="font-medium text-2xl my-3">{title}</Title>
                  {level.map((item) => (
                     <Badge key={item}>{item}</Badge>
                  ))}
               </div>
               <div className="fixed inset-x-0 top-16 z-10 mx-auto w-full md:hidden">
                  <ImageCard image={image} level={level} title={title} />
               </div>

               <div className={`${smStyles} ${mdStyles} ${xsStyles}`}>
                  <p className="text-justify text-xl ">
                     {text_content
                        .replace(/\./g, ". ")
                        .split(" ")
                        .map((word, index) => (
                           <span
                              className={`${
                                 currentWordIntext === word && "bg-accent"
                              } cursor-pointer rounded-lg pb-1 pl-1 duration-300 ease-in-out hover:bg-accent`}
                              key={`${word}${index}`}
                              onClick={() => {
                                 setCurrentWordIntext(word)
                                 setSelectedWord(word)
                              }}
                           >
                              {`${word} `}
                           </span>
                        ))}
                  </p>
                  <footer className="mt-5">
                     <Link to={`/quiz/${id}`}>
                        <Button>Quiz Anfangen 📝</Button>
                     </Link>
                  </footer>
               </div>
            </div>
         </div>
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
