import { nanoid } from 'nanoid'
import { IList } from './list.interface'

function NumberedList({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: IList) {
    return (
        <ol>
            {items.map((item, i) => (
                <li key={nanoid()}>
                    <span>{i + 1}.</span>
                    <ItemComponent {...{ [resourceName]: item }} />
                </li>
            ))}
        </ol>
    )
}

export default NumberedList
