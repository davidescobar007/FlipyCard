import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { ArticleLoader } from "../../components/atoms/loader"
import Hero from "../../components/molecules/hero"
import { StoreContext } from "../../context/global.state"
export default function Article() {
   const {
      getSingleArticle,
      state: {
         selectedArticle: { title, text_content, level, imageFile, link, author },
         isLoading: { article: isLoadingArticle }
      }
   } = useContext(StoreContext)

   const { id } = useParams()

   useEffect(() => {
      getSingleArticle(id)
   }, [])

   return !imageFile && isLoadingArticle ? (
      <ArticleLoader />
   ) : (
      imageFile && (
         <Hero
            author={author}
            image={imageFile}
            level={level}
            link={link}
            text_content={text_content}
            title={title}
         />
      )
   )
}
