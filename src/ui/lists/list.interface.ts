import { ILargePerson, IPerson } from 'ui/list-items/people/person.interface'

export interface IList {
    items: ILargePerson[] | IPerson[]
    resourceName: string
    itemComponent: React.ElementType
}
