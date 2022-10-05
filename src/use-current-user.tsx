import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IUser } from 'user.interface'

function useCurrentUser() {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        ;(async () => {
            const response = await axios.get('/current-user')
            setUser(response.data)
        })()
    }, [])
    return user
}

export default useCurrentUser
