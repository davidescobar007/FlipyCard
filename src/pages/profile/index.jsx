import { useContext } from "react"
import { useEffect } from "react"

import ProfileOrganism from "../../components/Organisms/profile"
import { StoreContext } from "../../context/global.state"

function Profile() {
   const {
      getCardsList,
      state: { cards, user }
   } = useContext(StoreContext)

   useEffect(() => {
      getCardsList()
   }, [])

   delete user.updated
   delete user.expand

   return <div>{user?.username && <ProfileOrganism cards={cards} user={user} />}</div>
}

export default Profile
