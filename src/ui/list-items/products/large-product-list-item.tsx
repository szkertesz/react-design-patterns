import { ILargeProduct } from './product.interface'

export default function LargeProductListItem({
    product,
}: {
    product: ILargeProduct
}) {
    const { name, price, description, rating } = product
    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Average rating: {rating}</p>
        </>
    )
}
