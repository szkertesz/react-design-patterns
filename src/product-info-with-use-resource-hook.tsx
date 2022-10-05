import { IProduct } from 'product.interface'
import useResource from 'use-resource'

export const ProductInfoWithUseResourceHook = ({
    productId,
}: {
    productId: string
}) => {
    const product = useResource(`/products/${productId}`)
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
