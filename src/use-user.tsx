import axios from 'axios'
import { useEffect, useState } from 'react'
import { IUser } from 'user.interface'

function useUser(userId: string) {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        ;(async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        })()
    }, [userId])
    return user
}

export default useUser
