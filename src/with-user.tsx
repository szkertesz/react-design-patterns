import axios from 'axios'
import React, { ComponentType, useEffect, useState } from 'react'
import { IUser } from 'user.interface'

interface IWithUserProps {
    // userId: Pick<IUser, 'id'>
    user: IUser
}

function withUser<T extends IWithUserProps>(
    Component: ComponentType<T>,
    userId: string
) {
    return (props: Omit<T, keyof IWithUserProps>) => {
        const [user, setUser] = useState<IUser | null>(null)

        useEffect(() => {
            ;(async () => {
                const response = await axios.get(`/users/${userId}`)
                setUser(response.data)
            })()
        }, [])

        return <Component {...(props as T)} user={user} />
    }
}

export default withUser
