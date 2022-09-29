import { IPerson } from './person.interface'

export default function SmallPersonListItem({ person }: { person: IPerson }) {
    const { name, age } = person
    return (
        <p>
            Name: {name}, Age: {age} years
        </p>
    )
}
