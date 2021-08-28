import React from 'react'
import Login from './login/login'
import { UserAPI, useSession } from 'ponciano-login-hook'
import Navbar from './navbar/navbar'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Token from './token/token'

const App = () => {
    const USER_API = new UserAPI("https://rpg-naruto-login-service.herokuapp.com/rpg-naruto", useSession())
    const session = USER_API.useSession.session

    if(!session) {
        return <Login userAPI={USER_API} />
    }

    return (
        <>
            <Navbar USER_API={USER_API} />
            <BaseLayout>
                <HashRouter>
                    <Switch>
                        <Route 
                            path="/"
                            render={({ match: { url } }) => {
                                return (
                                    <Route exact path={'/'}>
                                        <Token userId={USER_API.useSession.session.id} />
                                    </Route>
                                )
                            }}
                        />
                    </Switch>
                </HashRouter>
            </BaseLayout>
        </>
    )
}

export default App

const BaseLayout = styled.div`
    margin: 65px 25px 25px 25px;
`
