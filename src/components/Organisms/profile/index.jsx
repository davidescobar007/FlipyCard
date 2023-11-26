import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import { StoreContext } from "../../../context/global.state"
import { areObjectsDistinct } from "../../../utils"
import Button from "../../atoms/button/index"
import InputAtom from "../../atoms/input"
import Title from "../../atoms/title/title"

function ProfileOrganism() {
   const {
      updateUSer,
      state: { user }
   } = useContext(StoreContext)
   const userCopy = { ...user }
   delete userCopy.updated
   delete userCopy.expand
   const [userInfo, setUserInfo] = useState(userCopy)
   const { t } = useTranslation()

   const handleChange = (e) => {
      const { name, value } = e.target
      setUserInfo((prevValues) => ({ ...prevValues, [name]: value.replace(/[@ ]+/g, "") }))
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      updateUSer(userInfo)
   }

   return (
      <section className="flex flex-col items-center justify-center">
         <div className="avatar">
            <div className="w-24 rounded-full">
               <img alt="profile pic" src={user.avatarUrl} />
            </div>
         </div>
         <Title extraClassName="mt-4" type="h4">
            {t("score.span")}: <span className="text-lg font-bold">{user.userScore} ✨</span>
         </Title>

         <form className="form-control my-2 flex w-full flex-wrap md:w-7/12" onSubmit={handleSubmit}>
            <InputAtom
               disabled
               id="name"
               labelText={t("profile.name")}
               name="name"
               onChange={handleChange}
               placeHolder={userCopy.name}
               value={userInfo?.name}
               withLabel
            />
            <InputAtom
               id="username"
               labelText={t("profile.alias")}
               maxLength="13"
               name="username"
               onChange={handleChange}
               placeHolder={`@${userCopy.username}`}
               value={`@${userInfo?.username}`}
               withLabel
            />
            <InputAtom
               disabled
               id="email"
               labelText={t("profile.email")}
               name="email"
               onChange={handleChange}
               placeHolder={userCopy.email}
               value={userInfo?.email}
               withLabel
            />

            {areObjectsDistinct(userInfo, userCopy) && <Button type="submit">{t("profile.saveButton")}</Button>}
         </form>
      </section>
   )
}

export default ProfileOrganism
