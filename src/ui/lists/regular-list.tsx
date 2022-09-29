import { IList } from './list.interface'

function RegularList({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: IList) {
    return (
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{ [resourceName]: item }} />
            ))}
        </>
    )
}

export default RegularList
