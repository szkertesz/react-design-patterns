import { IProduct } from 'product.interface'

export const ProductInfo = ({ product }: { product: IProduct | null }) => {
    const { name, price, description, rating } = (product as IProduct) || {}

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    )
}
