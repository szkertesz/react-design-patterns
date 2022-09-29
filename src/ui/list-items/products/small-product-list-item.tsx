import React from 'react'
import { IProduct } from './product.interface'

function SmallProductListItem({ product }: { product: IProduct }) {
    const { name, price } = product
    return (
        <h3>
            {name} - {price}
        </h3>
    )
}

export default SmallProductListItem
