import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Hero from "../../components/molecules/hero"
import { StoreContext } from "../../context/global.state"
export default function Article() {
   const {
      getSingleArticle,
      state: {
         selectedArticle: { image, title, text_content, level }
      }
   } = useContext(StoreContext)
   const { id } = useParams()

   useEffect(() => {
      getSingleArticle(id)
   }, [])

   return title && <Hero image={image} level={level} text_content={text_content} title={title} />
}
