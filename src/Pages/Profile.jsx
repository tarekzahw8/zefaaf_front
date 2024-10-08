import  { useContext } from 'react'
import { AppContext } from '../Store/StateData'

const Profile = () => {
    const { user , logout} = useContext(AppContext)
  return (
    <div>
        <p>

        userName{ user.name}
        </p>
<button onClick={logout}> تسجيل خروج </button>
        </div>
  )
}

export default Profile