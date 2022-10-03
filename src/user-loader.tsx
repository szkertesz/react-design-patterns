import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { IUser } from 'user.interface'

function UserLoader({
    userId,
    children,
}: {
    userId: string
    children: React.ReactNode
}) {
    const [user, setUser] = useState<IUser[] | null>(null)
    useEffect(() => {
        ;(async () => {
            const response = await axios.get(`/users/${userId}`)
            const currentUser = response.data
            console.log(currentUser)
            setUser(currentUser)
        })()
    }, [userId])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user } as any)
                }
                return child
            })}
        </>
    )
}

export default UserLoader
