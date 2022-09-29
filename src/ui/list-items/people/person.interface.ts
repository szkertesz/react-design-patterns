// export interface IPerson {
//     person: {
//         name: string
//         age: number
//     }
// }
// // https:// stackoverflow.com/questions/53636756/typescript-interface-extending-another-interface-with-nested-properties
// export interface ILargePerson extends IPerson {
//     person: IPerson['person'] & {
//         hairColor: string
//         hobbies: string[]
//     }
// }

export interface IPerson {
    name: string
    age: number
}
// https:// stackoverflow.com/questions/53636756/typescript-interface-extending-another-interface-with-nested-properties
export interface ILargePerson extends IPerson {
    hairColor: string
    hobbies: string[]
}
