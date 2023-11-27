import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import Button from "../../atoms/button"
import Title from "../../atoms/title/title"

export default function HomeOrganism() {
   const { t } = useTranslation()
   return (
      <section className="mt-10 flex flex-wrap items-center justify-center">
         <div className="floating flex flex-wrap justify-center">
            <div className="bg-green-4000 flex justify-center">
               <img alt="map of Germany in cartoon style" src="/germany.png" width={110} />
            </div>
            <div className="flex w-full justify-center">
               <div className="bg-green-4000">
                  <img alt="map of Switzerland in cartoon style" src="/switzerland.png" width={150} />
               </div>
               <div className="bg-yellow-4000">
                  <img alt="map of Austria in cartoon style" src="/austria.png" width={200} />
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center">
            <Title extraClassName="text-3xl my-7 text-center bg-red-30 text-gray-700 font-extrabold">
               {t("home.tittle")}
            </Title>
            <Link to="/learn">
               <Button extraClassname="mt-5 btn-wide"> {t("home.button")}</Button>
            </Link>
         </div>
      </section>
   )
}
