import { useContext } from "react"

import Hero from "../../components/molecules/hero"
import { StoreContext } from "../../context/global.state"
export default function Article() {
   const {
      state: {
         selectedArticle: { image, title, text_content, level }
      }
   } = useContext(StoreContext)
   return (
      text_content && (
         <Hero
            image={image}
            level={level}
            text_content={text_content}
            title={title}
         />
      )
   )
}
