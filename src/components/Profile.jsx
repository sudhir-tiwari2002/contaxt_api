import React, {useContext} from 'react'
import UserContext from '../contaxt/userContext'


function Profile() {
    const {user} = useContext(UserContext)
    // console.log(user,"<<<<<<<")
    
    // console.log(user.userName,"--------")
    // console.log(user.password,">>>>>>>>>")

    if((!user.userName) && (!user.password)) return <div> please Login</div>

   

  return (
    <div>
      Welcome {user.userName} and you have login by using this {user.password} password
    </div>
  )
}

export default Profile
