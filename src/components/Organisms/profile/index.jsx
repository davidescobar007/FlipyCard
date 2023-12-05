/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import { StoreContext } from "../../../context/global.state"
import { areObjectsDistinct } from "../../../utils"
import Button from "../../atoms/button/index"
import InputAtom from "../../atoms/input"
import Title from "../../atoms/title/title"
import DashBoardOrganism from "../dashBoard"

function ProfileOrganism({ user, cards }) {
   const { updateUSer } = useContext(StoreContext)
   const userCopy = { ...user }
   const [userInfo, setUserInfo] = useState(userCopy)
   const { t } = useTranslation()

   const handleChange = (e) => {
      const { name, value } = e.target
      setUserInfo((prevValues) => ({
         ...prevValues,
         [name]: name === "username" ? value.replace(/[@ ]+/g, "") : value
      }))
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      updateUSer(userInfo)
   }

   return (
      <section className="flex flex-col items-center justify-center">
         <div className="avatar">
            <div className="w-24 rounded-full">
               <img alt="profile pic" src={user?.avatarUrl} />
            </div>
         </div>
         <Title extraClassName="mt-4" type="h4">
            {t("score.span")}: <span className="text-lg font-bold">{user?.userScore} ✨</span>
         </Title>

         <form className="form-control my-2 mb-10 flex w-full flex-wrap md:w-7/12" onSubmit={handleSubmit}>
            <InputAtom
               id="name"
               labelText={t("profile.name")}
               maxLength="30"
               name="name"
               onChange={handleChange}
               placeholder={userCopy?.name}
               value={userInfo?.name}
               withLabel
            />
            <InputAtom
               id="username"
               labelText={t("profile.alias")}
               maxLength="13"
               name="username"
               onChange={handleChange}
               placeholder={`@${userCopy?.username}`}
               value={`@${userInfo?.username}`}
               withLabel
            />
            <InputAtom
               disabled
               id="email"
               labelText={t("profile.email")}
               name="email"
               onChange={handleChange}
               placeholder={userCopy?.email}
               value={userInfo?.email}
               withLabel
            />

            {areObjectsDistinct(userInfo, userCopy) && <Button type="submit">{t("profile.saveButton")}</Button>}
         </form>
         {cards.length > 0 && <DashBoardOrganism data={cards} />}
      </section>
   )
}

export default ProfileOrganism
