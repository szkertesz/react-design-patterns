import axios from 'axios'
import useDataSource from 'use-data-source'
import { IUser } from 'user.interface'

const serverResource = (resourceUrl: string) => async () => {
    const response = await axios.get(resourceUrl)
    return response.data
}

const localStorageResource = (key: string) => () => {
    return localStorage.getItem(key)
}

export const UserInfoWithUseDataSourceHook = ({
    userId,
}: {
    userId: string
}) => {
    // const user = useResource(`/users/${userId}`)
    // const user = useDataSource(async () => {
    //     const response = await axios.get(`/users/${userId}`)
    //     return response.data
    // })
    const user = useDataSource(serverResource(`/users/${userId}`))
    const message = useDataSource(localStorageResource('message'))
    const { name, age, hairColor, hobbies } = (user as IUser) || {}

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </>
    ) : (
        <p>Loading ...</p>
    )
}
