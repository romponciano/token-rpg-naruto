import React from 'react'
import Login from './login/login'
import { UserAPI, useSession } from 'ponciano-login-hook'

const App = () => {
    const USER_API = new UserAPI("https://rpg-naruto-login-service.herokuapp.com/rpg-naruto", useSession())
    const session = USER_API.useSession.session

    if(!session) {
        return <Login userAPI={USER_API} />
    }

    return (
        <h1>logado</h1>
    )
}

export default App