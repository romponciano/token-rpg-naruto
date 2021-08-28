import React from 'react'
import Login from './login/login'
import { UserAPI, useSession } from 'ponciano-login-hook'
import Navbar from './navbar/navbar'

const App = () => {
    const USER_API = new UserAPI("https://rpg-naruto-login-service.herokuapp.com/rpg-naruto", useSession())
    const session = USER_API.useSession.session

    if(!session) {
        return <Login userAPI={USER_API} />
    }

    return (
        <Navbar USER_API={USER_API} />
    )
}

export default App