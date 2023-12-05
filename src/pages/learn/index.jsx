import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { CardLoader } from "../../components/atoms/loader"
import Card from "../../components/molecules/card"
import { StoreContext } from "../../context/global.state"
import { constants } from "../../context/global.types"

export default function Learn() {
   const {
      state: {
         articles,
         isLoading: { articleList: isLoading }
      },
      getArticlesList,
      setSelectedArticle
   } = useContext(StoreContext)

   useEffect(() => {
      getArticlesList()
   }, [])
   return (
      <div className="lg:pr-4">
         {isLoading
            ? Array.from({ length: 5 }).map((_i, index) => <CardLoader key={index} />)
            : articles.map(({ level, image, text_content, title, id, imageFile }) => {
                 return (
                    <Link key={id} to={`/article/${id}`}>
                       <Card
                          content={text_content}
                          id={id}
                          image={`${import.meta.env.VITE_API_ENVIRONMENT}/api/files/${
                             constants.ARTICLES
                          }/${id}/${imageFile}`}
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
