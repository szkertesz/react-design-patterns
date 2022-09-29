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
                    <span>{i + 1}.</span>
                    <ItemComponent key={i} {...{ [resourceName]: item }} />
                </>
            ))}
        </>
    )
}

export default NumberedList
