import useCurrentUser from 'use-current-user'
import { IUser } from 'user.interface'

export const CurrentUserInfoWithHook = () => {
    const user = useCurrentUser()
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
