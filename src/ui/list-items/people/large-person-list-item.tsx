import { ILargePerson } from './person.interface'

export default function LargePersonListItem({
    person,
}: {
    person: ILargePerson
}) {
    const { name, age, hairColor, hobbies } = person
    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map((hobby, i) => (
                    <li key={`${hobby}_${i}`}>{hobby}</li>
                ))}
            </ul>
        </>
    )
}
