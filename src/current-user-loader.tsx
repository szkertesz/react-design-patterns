import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { IUser } from 'user.interface'

function CurrentUserLoader({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser[] | null>(null)
    useEffect(() => {
        ;(async () => {
            const response = await axios.get('/current-user')
            const currentUser = response.data
            console.log(currentUser)
            setUser(currentUser)
        })()
    }, [])

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

export default CurrentUserLoader
