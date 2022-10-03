import { nanoid } from 'nanoid'
import { IList } from './list.interface'

function NumberedList({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: IList) {
    return (
        <>
            {items.map((item, i) => (
                <>
                    <span key={nanoid()}>{i + 1}.</span>
                    <ItemComponent
                        key={nanoid() + i}
                        {...{ [resourceName]: item }}
                    />
                </>
            ))}
        </>
    )
}

export default NumberedList
