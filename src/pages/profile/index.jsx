import ProfileOrganism from "../../components/Organisms/profile"
import { useLocalStorage } from "../../customHooks/useLocalStorage"

function Profile() {
   const [{ model }] = useLocalStorage("pocketbase_auth", {})
   console.log("model", model)
   return <div>{model?.username && <ProfileOrganism user={model} />}</div>
}

export default Profile
