import axios from 'axios'
import React, { ComponentType, useEffect, useState } from 'react'
import { IUser } from 'user.interface'

interface IWithEditableUserProps {
    // userId: Pick<IUser, 'id'>
    user: IUser
    onChangeUser: (changes: React.SetStateAction<any>) => void
    onResetUser: () => void
    onSaveUser: () => void
}

function withEditableUser<T extends IWithEditableUserProps>(
    Component: ComponentType<T>,
    userId: string
) {
    return (props: Omit<T, keyof IWithEditableUserProps>) => {
        const [originalUser, setOriginalUser] = useState<IUser | null>(null)
        const [user, setUser] = useState<IUser | null>(null)

        useEffect(() => {
            ;(async () => {
                const response = await axios.get(`/users/${userId}`)
                setOriginalUser(response.data)
                setUser(response.data)
            })()
        }, [])

        const onChangeUser = (changes: React.SetStateAction<any>) =>
            setUser({ ...user, ...changes })

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user })
            setOriginalUser(response.data)
            setUser(response.data)
        }

        const onResetUser = () => {
            setUser(originalUser)
        }

        return (
            <Component
                {...(props as T)}
                user={user}
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}
            />
        )
    }
}

export default withEditableUser
