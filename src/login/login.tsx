import React, { useState } from 'react'
import styled from 'styled-components'
import { NotificationMessage, NOTIFICATION_TYPE } from '../components/notification'
import LoadingButton from '../components/loading-button'
import {UserAPI } from 'ponciano-login-hook'

const Login: React.FC<{ userAPI: UserAPI }> = ({ userAPI }): JSX.Element => {

    const login = (): Promise<void> => {
        return userAPI.login(username, password)
        .then(status => {
            if(status != 200) setErrorMessage("Invalid username/password")
        })
        .catch(er => {
            setErrorMessage("Invalid username/password")
        })
    }

    const getRandomBackgroundImage = (): number => {
        return Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    }
    
    const [img] = useState<number>(getRandomBackgroundImage())
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [errorMessage, setErrorMessage] = useState<string>()

    return (
        <StyledLogin>
            <NotificationMessage 
                type={NOTIFICATION_TYPE.DANGER} 
                message={errorMessage} 
                setMessage={(value: string) => setErrorMessage(value)} 
            />

            <div className="row nopadding">

                <div className="col-md-5 col-sm-12 nopadding">
                    <div className="white-panel">
                        <div className="login-show">
                            <h2>LOGIN</h2>
                            <input type="text" className="form-control" placeholder="Email" onChange={e => setUsername(e.target.value)} />
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <LoadingButton 
                                className="form-control"
                                onClick={login}
                                label={"Login"}
                            />
                            <a href="">Forgot password?</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 nopadding">
                    <img src={`src/images/background/${img}.jpg`} height="700" />
                </div>
            </div>
        </StyledLogin>
    )
}

export default Login

const StyledLogin = styled.div`

    .nopadding {
        padding: 0px !important;
        margin: 0px !important;
    }

    img {
        margin: auto;
        display: block;
        margin-top: 7vh;
        max-width: 90%;
        max-height: 90%;
    }

    .white-panel{
        width: 75%;
        box-shadow: 0 0 15px 9px #00000096;
        margin: auto;
        margin-top: 25vh;
    }

    .login-show {
        color: #242424;
        text-align: left;
        padding: 15px;
    }

    .login-show input[type="text"], .login-show input[type="password"]{
        width: 100%;
        display: block;
        margin:20px 0;
        padding: 15px;
        border: 1px solid #b5b5b5;
        outline: none;
    }
    .login-show button {
        max-width: 150px;
        width: 100%;
        background: #444444;
        color: #f9f9f9;
        border: none;
        padding: 10px;
        text-transform: uppercase;
        border-radius: 2px;
        float:right;
        cursor:pointer;
    }
    .login-show a{
        display:inline-block;
        padding:10px 0;
    }
`
