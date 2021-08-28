import { UserAPI } from 'ponciano-login-hook'
import React, { useState } from 'react'
import styled from 'styled-components'
import ActionIcon from '../../components/action-icon'
import FinishButtons from '../../components/finish-buttons'
import { NotificationMessage, NOTIFICATION_TYPE } from '../../components/notification'
import ConfirmationModal from './confirmation-modal'
import NewPassword from './new-password'

const ProfileSettings: React.FC<{ USER_API: UserAPI }> = ({USER_API}) => {

    const [username, setUsername] = useState<string>(USER_API.useSession.session.username)
    const [editUsername, setEditUsername] = useState<boolean>(false)
    const [usernameExists, setUsernameExists] = useState<boolean>(false)

    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
    const [password, setPassword] = useState<string>()
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [notification, setNotification] = useState<{message: string, type: string}>({message: '' , type: NOTIFICATION_TYPE.SUCCESS})

    const updateUser = () => {
        const oldUsername = USER_API.useSession.session.username
        USER_API.updateUser(oldUsername, password, username)
            .then(res => {    
                setNotification({
                    message: "Settings updated successfully! :)",
                    type: NOTIFICATION_TYPE.SUCCESS
                })
            })
            .catch(err => {
                setNotification({
                    message: "We couldn't update your settings. Please try again :(",
                    type: NOTIFICATION_TYPE.DANGER
                })
            })
    }

    const userExists = async (): Promise<boolean> => {
        const exists = await USER_API.exists(username).then(status => {
            if(status == 200 || USER_API.useSession.session.username == username) {
                setUsernameExists(false)
                return false
            }
            setUsernameExists(true)
            return true
        })
        return exists
    }

    return (
        <BaseLayout>

            <NotificationMessage {...notification} 
                setMessage={msg => setNotification({message: msg, type: notification.type})} 
            />
        
            <ConfirmationModal 
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                setPassword={setPassword}
                showConfirmation={showConfirmation}
                setShowConfirmation={setShowConfirmation}
                password={password}
                confirmAction={updateUser}
            />

            <Row className="form-group row">
                <label className="col-sm-5 col-form-label">Username</label>
                <div className="col-sm-7">
                    <div className="input-group">
                        <input 
                            id="username"
                            type="text" 
                            readOnly={!editUsername}
                            className={usernameExists ? "form-control is-invalid" : "form-control"}
                            placeholder="username"
                            value={username} 
                            onBlur={() => userExists()}
                            onChange={e => setUsername(e.target.value)}
                        />
                    
                        <span className="input-group-text">
                            <ActionIcon 
                                className={editUsername ? "far fa-check-square" : "far fa-edit"}
                                onClick={() => setEditUsername(!editUsername)}
                            />
                        </span>

                        <label className="invalid-feedback" htmlFor="username">
                            Username already exists
                        </label>
                    </div>
                </div>
            </Row>

            <NewPassword USER_API={USER_API} />

            <FinishButtons 
                confirm={{
                    label: 'Save',
                    disabled: usernameExists,
                    onClick: () => {
                        userExists()
                            .then(exists => setShowConfirmation(!exists))
                    }
                }}
                cancel={{
                    label: 'Cancel',
                    disabled: false,
                    onClick: () => history.go(0)
                }}
            />
        </BaseLayout>
    )
}

export default ProfileSettings

const BaseLayout = styled.div`
    max-width: 450px;
`

const Row = styled.div`
    margin-bottom: 15px;
    margin-top: 15px;
`
