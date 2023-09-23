import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import Card from "../../components/molecules/card"
import { StoreContext } from "../../context/global.state"

export default function Learn() {
   const {
      state: { articles },
      getArticlesList,
      setSelectedArticle
   } = useContext(StoreContext)

   useEffect(() => {
      getArticlesList()
   }, [])
   return (
      <div>
         {articles.map(({ level, image, text_content, title, id }) => {
            return (
               <Link key={id} to="/article">
                  <Card
                     content={text_content}
                     image={image}
                     level={level}
                     onClick={() =>
                        setSelectedArticle({
                           level,
                           image,
                           text_content,
                           title,
                           id
                        })
                     }
                     title={title}
                  />
               </Link>
            )
         })}
      </div>
   )
}
