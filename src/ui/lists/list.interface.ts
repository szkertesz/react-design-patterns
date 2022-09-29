import { ILargePerson, IPerson } from 'ui/list-items/people/person.interface'
import {
    IProduct,
    ILargeProduct,
} from 'ui/list-items/products/product.interface'

export interface IList {
    items: ILargePerson[] | IPerson[] | IProduct[] | ILargeProduct[]
    resourceName: string
    itemComponent: React.ElementType
}
