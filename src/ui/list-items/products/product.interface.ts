export interface IProduct {
    name: string
    price: string
}

export interface ILargeProduct extends IProduct {
    description: string
    rating: number
}
